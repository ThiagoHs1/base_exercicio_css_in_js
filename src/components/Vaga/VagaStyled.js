import styled from 'styled-components'

export const VagaItem = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  :hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);

    a {
      border-color: var(--cor-principal);
      background-color: var(--cor-secundaria);
      color: var(--cor-principal);
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`

export const VagaLink = styled.a`
  border-color: var(--cor-secundaria);
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`

export const VagaInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 8px;
  }
`

export const Vaga = styled(
  ({
    titulo,
    localizacao,
    nivel,
    modalidade,
    salarioMin,
    salarioMax,
    requisitos,
    className
  }) => (
    <VagaItem className={className}>
      <VagaTitulo>{titulo}</VagaTitulo>
      <VagaInfo>
        <li>Localizacao: {localizacao}</li>
        <li>Senioridade: {nivel}</li>
        <li>Tipo de contratacao: {modalidade}</li>
        <li>
          Salário: {salarioMin} - {salarioMax}
        </li>
        <li>Requisitos: {requisitos.join(', ')}</li>
      </VagaInfo>
      <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
    </VagaItem>
  )
)``
