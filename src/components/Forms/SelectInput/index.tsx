import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'
import { SDropDown } from './styles'

interface SelectProps {
  name: string
}

const Select: React.FC<SelectProps> = ({ children, name }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    if (!name) {
      return
    }
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField, name])

  return (
    <SDropDown name={name} ref={inputRef}>
      {children}
    </SDropDown>
  )
}

export default Select
