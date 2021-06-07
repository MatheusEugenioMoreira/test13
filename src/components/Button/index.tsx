import React from 'react'

import { SButton } from './styles'

type TButtonTypes = 'button' | 'reset' | 'submit'

interface ButtonProps {
  type: TButtonTypes
  label: string
  onClick?: () => unknown
  isLoading?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({ type, label, isLoading, onClick, className }: ButtonProps) => {
  return (
    <SButton className={className} disabled={isLoading} onClick={onClick} type={type}>
    </SButton>
  )
}

export default Button
