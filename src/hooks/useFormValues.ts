import { useState } from 'react'

export type SetValue = (field: string, value: any) => void
export type SetValues = (values: any) => void
export type FieldOnChange = (evt: React.FormEvent) => void
export type Reset = () => void

export interface UserFormValuesResult<TValues = any> {
  setValue: SetValue
  setValues: SetValues,
  values: TValues
  fieldOnChange: FieldOnChange
  reset: Reset,
}

export default function useFormValues<TSchema = any>(
  initValues: TSchema
): UserFormValuesResult<TSchema> {
  const state = useState(initValues)
  const values: TSchema = state[0]
  const setValues: SetValues = state[1]

  const setValue: SetValue = (field: string, value: any): void => {
    const newValues: TSchema = {
      ...values,
      [field]: value,
    }
    setValues(newValues)
  }

  const fieldOnChange = (evt: React.FormEvent): void => {
    const target: HTMLInputElement = evt.target as HTMLInputElement
    setValue(target.id, target.value)
  }

  const reset = (): void => {
    setValues(initValues)
  }

  return {
    values,
    setValue,
    setValues,
    fieldOnChange,
    reset,
  }
}
