import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkContainer, LinkBotao } from './styles'

export type ProjetoProps = {
  titulo: string
  descricao: string
  link: string
}

const Projeto = ({ titulo, descricao, link }: ProjetoProps) => {
  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Paragrafo tipo="secundario">{descricao}</Paragrafo>
      <LinkContainer>
        <LinkBotao href={link}>Visualizar</LinkBotao>
      </LinkContainer>
    </Card>
  )
}

export default Projeto
