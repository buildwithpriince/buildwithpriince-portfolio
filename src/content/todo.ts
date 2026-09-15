/*
 * Undecided content (CLAUDE.md "Copy", SPEC §9, §14).
 *
 * A value that is not yet known is a Todo, never placeholder text. It renders
 * as a visible TODO marker so it cannot pass for finished copy.
 */

export type Todo = { todo: string }

export type Field = string | Todo

export const todo = (note: string): Todo => ({ todo: note })

export const isTodo = (value: Field): value is Todo => typeof value !== 'string'
