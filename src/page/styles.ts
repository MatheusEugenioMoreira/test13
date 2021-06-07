import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

export const LoginContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = styled(Unform)`
  background: #fff;
  box-shadow: 0px 5px 7px rgba(0.355, 0.355, 0.455, 0.305);
  border-radius: 0.8rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 100%;
    font-size: 15px;
    font-weight: 700;
    background-color: #363636;
    color: #fff;
  }
`

export const ErrorLabel = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #ff0000;
  border-radius: 5px;
`

export const BlockFieldContainer = styled.div`
  width: 100%;
`
