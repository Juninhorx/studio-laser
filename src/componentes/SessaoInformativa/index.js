import './SessaoInformativa.css'
import Informacao from '../Informacao'

const SessaoInformativa = () => {
    return (
        <section className='sessao-informativa'>
            <h2><strong>Depilação a laser </strong>É pra todos!</h2>
            <p>Na Studio Laser somos especialistas em depilação a laser. Sabemos como é importante ter a tranquilidade de estar nas mãos<br/> dos melhores profissionais quando quer realizar um tratamento de depilação a laser.</p>
            <Informacao imagem="./images/img1.png" alternativo="imagem modelo de depilação" titulo="Peles Negras ou Bronzeadas" paragrafo="Atendendo ao facto de que existem diferentes tipos de pele, a Studio Laser dispõe de várias tecnologias que se adaptam às diferentes exigências de cada cliente. Escolha o que melhor se adequa ao seu caso e prepare-se para ter uma pele lisa e perfeitamente depilada." classe=""/>
            <Informacao imagem="./images/img2.png" alternativo="imagem modelo de depilação" titulo="Peles Negras ou Bronzeadas" paragrafo="Atendendo ao facto de que existem diferentes tipos de pele, a Studio Laser dispõe de várias tecnologias que se adaptam às diferentes exigências de cada cliente. Escolha o que melhor se adequa ao seu caso e prepare-se para ter uma pele lisa e perfeitamente depilada." classe="direita"/>
            <Informacao imagem="./images/img3.png" alternativo="imagem modelo de depilação" titulo="Peles Negras ou Bronzeadas" paragrafo="Atendendo ao facto de que existem diferentes tipos de pele, a Studio Laser dispõe de várias tecnologias que se adaptam às diferentes exigências de cada cliente. Escolha o que melhor se adequa ao seu caso e prepare-se para ter uma pele lisa e perfeitamente depilada." classe=""/>
        </section>
    )
}

export default SessaoInformativa