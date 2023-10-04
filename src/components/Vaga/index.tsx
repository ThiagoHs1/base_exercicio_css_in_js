import React from 'react'
import { Vaga } from './VagaStyled'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const VagaComponent = ({ ...props }: Props) => <Vaga {...props} />

export default VagaComponent
