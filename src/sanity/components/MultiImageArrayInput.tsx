import { useRef, useState } from 'react'
import { insert, PatchEvent, set, useClient, type ArrayOfObjectsInputProps } from 'sanity'

type ImageArrayInputProps = ArrayOfObjectsInputProps

type ImageArrayItem = {
  _key: string
  _type: 'image'
  asset: { _type: 'reference'; _ref: string }
}

export function MultiImageArrayInput(props: ImageArrayInputProps) {
  const { onChange, renderDefault, value } = props
  const client = useClient({ apiVersion: '2025-01-01' })
  const fileInput = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState('')

  async function handleFiles(files: FileList | null) {
    if (!files?.length) return

    setUploading(true)
    setMessage(`Učitavanje ${files.length} fotografija…`)

    try {
      const images = await Promise.all(
        Array.from(files, async (file): Promise<ImageArrayItem> => {
          const asset = await client.assets.upload('image', file, { filename: file.name })
          return {
            _key: crypto.randomUUID().replaceAll('-', ''),
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          }
        }),
      )

      const currentImages = Array.isArray(value) ? value : []
      const lastImage = currentImages.at(-1) as { _key?: string } | undefined
      const patch = lastImage?._key
        ? insert(images, 'after', [{ _key: lastImage._key }])
        : set(images)

      onChange(PatchEvent.from(patch))
      setMessage(`${images.length} fotografija dodano.`)
    } catch {
      setMessage('Učitavanje nije uspjelo. Pokušajte ponovno.')
    } finally {
      setUploading(false)
      if (fileInput.current) fileInput.current.value = ''
    }
  }

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button
          type="button"
          disabled={uploading}
          onClick={() => fileInput.current?.click()}
          style={{
            border: '1px solid #888',
            borderRadius: 4,
            padding: '8px 12px',
            background: uploading ? '#eee' : '#fff',
            color: '#222',
            cursor: uploading ? 'wait' : 'pointer',
            font: 'inherit',
          }}
        >
          {uploading ? 'Učitavanje…' : 'Odaberi više fotografija'}
        </button>
      </div>
      <input
        ref={fileInput}
        type="file"
        accept="image/*"
        multiple
        hidden
        onChange={(event) => void handleFiles(event.currentTarget.files)}
      />
      {message && <p role="status" style={{ margin: '0 0 12px', fontSize: 13 }}>{message}</p>}
      {renderDefault(props)}
    </div>
  )
}
