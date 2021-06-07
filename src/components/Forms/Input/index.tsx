import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'


import { SInput } from './styles'

interface InputProps {
  name: string
  id?: string
}

const Input: React.FC<InputProps> = ({ name, id = name }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return <SInput id={id} ref={inputRef} defaultValue={defaultValue} />
}

export default Input
