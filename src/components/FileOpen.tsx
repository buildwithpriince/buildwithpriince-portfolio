import { useEffect, useRef, useState } from 'react'
import { Record, RecordField } from './Record'
import { Value } from './Value'
import { fileNumber, files, type FileRecord } from '../content/files'
import s from './FileOpen.module.css'

/*
 * The file-open (SPEC §7). Click a row and the file takes the screen — the
 * cover lift from §6 at smaller scale, sharing the motion tokens so step 4
 * can match it rather than approximate it.
 *
 * Native <dialog> on purpose: it inerts the page behind, traps focus and
 * restores it on close without any of that being hand-rolled. What is
 * hand-rolled tends to be where keyboard access quietly breaks (§10).
 *
 * The element stays mounted and is opened and closed imperatively, because
 * unmounting it would cut the close animation off at the first frame.
 */

type Props = {
  slug: string | null
  onClose: () => void
}

export function FileOpen({ slug, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null)
  const index = files.findIndex((file) => file.slug === slug)
  const file = index === -1 ? null : files[index]

  /*
   * Hold the last opened record so its content is still there to animate out
   * after slug goes null. Without this the panel empties, then slides away.
   */
  const [shown, setShown] = useState<{ file: FileRecord; number: string } | null>(null)
  useEffect(() => {
    if (file) setShown({ file, number: fileNumber(index) })
  }, [file, index])

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (file && !dialog.open) dialog.showModal()
    if (!file && dialog.open) dialog.close()
  }, [file])

  useEffect(() => {
    document.title = file ? `FILE ${fileNumber(index)} — ${file.name} · Prince Agrawal` : DEFAULT_TITLE
  }, [file, index])

  return (
    <dialog
      ref={ref}
      className={s.dialog}
      aria-labelledby={shown ? 'file-open-title' : undefined}
      /*
       * Escape fires cancel. Prevent the native close and route it through
       * history instead, so the dialog only ever closes from one place and
       * the URL can never disagree with what is on screen.
       */
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
    >
      {shown && (
        <div className={s.panel} tabIndex={-1} autoFocus>
          <div className={s.bar}>
            <p className={s.number}>FILE {shown.number}</p>
            <button type="button" className={s.close} onClick={onClose}>
              Close
            </button>
          </div>

          <h2 className={s.title} id="file-open-title">
            {shown.file.name}
          </h2>
          <p className={s.description}>
            <Value field={shown.file.description} />
          </p>

          <div className={s.record}>
            <FullRecord file={shown.file} />
          </div>
        </div>
      )}
    </dialog>
  )
}

const DEFAULT_TITLE = 'Prince Agrawal — Systems Builder'

/* The full record (§7). Every field, in one order, for every file. */
function FullRecord({ file }: { file: FileRecord }) {
  return (
    <Record>
      <RecordField label="Year" field={file.year} />
      <RecordField label="Domain" field={file.domain} />
      <RecordField label="Status" field={file.status} />
      <RecordField label="Stack" field={file.stack} />
      <RecordField label="Specified" field={file.attribution.specified} />
      <RecordField label="Implementation" field={file.attribution.implementation} />
      <RecordField label="Duration" field={file.attribution.duration} />
      {file.commits && <RecordField label="Commits" field={file.commits} />}
      {file.outcome && <RecordField label="Outcome" field={file.outcome} />}
      <RecordField label="Repo" field={file.repo} link />
      <RecordField label="Live" field={file.live} link />
    </Record>
  )
}
