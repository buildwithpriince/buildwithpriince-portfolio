import { useState } from 'react'
import { FileOpen } from '../components/FileOpen'
import { Section } from '../components/Section'
import { Value } from '../components/Value'
import { fileNumber, files, type FileRecord } from '../content/files'
import { isTodo, type Field } from '../content/todo'
import { filePath, isPlainClick, useFileRoute } from '../lib/fileRoute'
import s from './FileIndex.module.css'

/*
 * 02 INDEX (SPEC §7). A list, not cards — three rows read as intentional
 * where three cards read as sparse, and twelve rows still work.
 *
 * Rows are real anchors to real per-file URLs, so a middle-click opens a tab
 * and "copy link address" gives something that works. The click handler only
 * intercepts plain left clicks; every modified click stays the browser's.
 */
export function FileIndex() {
  const { slug, open, close } = useFileRoute()

  /*
   * Hover and focus feed the same preview, so the keyboard sees what the
   * pointer sees. Cleared when the pointer leaves the list rather than each
   * row, otherwise it flickers on the gaps between rows.
   */
  const [previewSlug, setPreviewSlug] = useState<string | null>(null)
  const previewIndex = files.findIndex((file) => file.slug === previewSlug)
  const preview = previewIndex === -1 ? null : files[previewIndex]

  return (
    <Section id="index" label="index">
      <div className={s.layout}>
        <ol
          className={s.rows}
          onMouseLeave={() => setPreviewSlug(null)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPreviewSlug(null)
          }}
        >
          {files.map((file, index) => (
            <li key={file.slug} className={s.item}>
              <a
                className={s.row}
                href={filePath(file.slug)}
                data-cursor="open"
                data-dye={file.dye}
                onClick={(event) => {
                  if (!isPlainClick(event)) return
                  event.preventDefault()
                  open(file.slug)
                }}
                onMouseEnter={() => setPreviewSlug(file.slug)}
                onFocus={() => setPreviewSlug(file.slug)}
              >
                <span className={s.number}>File {fileNumber(index)}</span>
                <span className={s.name}>{file.name}</span>
                <span className={s.year}>
                  <Value field={file.year} />
                </span>
                <span className={s.domain}>
                  <Value field={file.domain} />
                </span>
                <span className={s.statusCell}>
                  <Status field={file.status} />
                </span>
              </a>
            </li>
          ))}
        </ol>

        {/*
         * Pointer-only affordance. Reserved so rows never shift under the
         * cursor as the preview fills — a list that moves while you aim at
         * it is worse than no preview. Hidden from assistive tech because
         * every field in it is repeated in full one Enter press away, and an
         * unannounced region that silently rewrites itself is just noise.
         */}
        <div className={s.preview} aria-hidden="true">
          {preview && <Preview file={preview} number={fileNumber(previewIndex)} />}
        </div>
      </div>

      <FileOpen slug={slug} onClose={close} />
    </Section>
  )
}

/*
 * What the hover surfaces: duration, attribution and commit share — the
 * disclosure practice §1 calls the thing that separates this site. Not a
 * thumbnail. The full record is in the file-open.
 */
function Preview({ file, number }: { file: FileRecord; number: string }) {
  return (
    <div className={s.previewInner}>
      <p className={s.previewNumber}>
        File {number} · {file.name}
      </p>
      <p className={s.previewDescription}>
        <Value field={file.description} />
      </p>
      <dl className={s.previewRecord}>
        <PreviewField label="Duration" field={file.attribution.duration} />
        <PreviewField label="Specified" field={file.attribution.specified} />
        <PreviewField label="Implementation" field={file.attribution.implementation} />
        {file.commits && <PreviewField label="Commits" field={file.commits} />}
      </dl>
    </div>
  )
}

function PreviewField({ label, field }: { label: string; field: Field }) {
  return (
    <div className={s.previewField}>
      <dt className={s.previewLabel}>{label}</dt>
      <dd className={s.previewValue}>
        <Value field={field} />
      </dd>
    </div>
  )
}

/*
 * Status is a madder fill with ink text (4.72:1) — every dye fill carries
 * ink (styles/tokens.css). An undecided status stays a TODO marker and gets
 * no fill.
 */
function Status({ field }: { field: Field }) {
  if (isTodo(field)) return <Value field={field} />
  return <span className={s.statusFlag}>{field}</span>
}
