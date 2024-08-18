import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const projetos = [
  {
    titulo: 'GitHub ',
    descricao: 'Projetos desenvolvidos ao longo de minha jornada acadêmica.',
    link: 'https://github.com/danyllorobemar/'
  },
  {
    titulo: 'Vitrine Turística - Fictício ',
    descricao: 'Projeto simples com uso do BootStrap.',
    link: 'https://devdan-challenge-13.vercel.app/'
  },
  {
    titulo: 'Ateliê de Doces - Fictício ',
    descricao: 'Desenvolvido com CSS responsivo e BootStrap.',
    link: 'https://devdan-project03.vercel.app/'
  },
  {
    titulo: 'Clone do DisneyPlus',
    descricao: 'Clone do DisneyPlus desenvolvido com Sass.',
    link: 'https://devdan-clone-disneyplus.vercel.app/'
  },
  {
    titulo: 'Tech Talks - Evento Fictício',
    descricao: 'Landing page com ferramentas do parcel.',
    link: 'https://devdan-challenge-22.vercel.app/'
  }
]

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Meus Projetos</Titulo>
    <Lista>
      {projetos.map((projeto, index) => (
        <li key={index}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
          />
        </li>
      ))}
    </Lista>
  </section>
)

export default Projetos
