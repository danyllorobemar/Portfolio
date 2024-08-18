import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Olá! Meu nome é Danyllo e sou desenvolvedor Full Stack especializado em
      Java. Tenho experiência em todo o ciclo de desenvolvimento de software,
      desde o backend robusto até interfaces amigáveis no frontend. Em meu
      portfólio, desenvolvido com react, você encontrará uma seleção de projetos
      que demonstram minhas habilidades técnicas, evolução e meu compromisso com
      a qualidade. Seja bem-vindo e sinta-se à vontade para explorar meu
      trabalho!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=danyllorobemar&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=danyllorobemar&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
