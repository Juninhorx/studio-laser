import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-texto'>
                <h2>Agende agora e ganhe</h2>
                <h1><span className='destaque'>50% de desconto</span>  na <br/> sua primeira sessão</h1>
                <p>
                    Não perca mais tempo e garanta agora mesmo
                    <br/>o seu desconto exclusivo para livrar-se
                    <br/>definitivamente dos pelos indesejados.
                    <br/>Faça o seu cadastro e dê o primeiro passo rumo
                    <br/>a uma nova e confiante versão de si mesma.
                </p>
                <a href='https://www.google.com'><button>ganhar meu desconto</button></a>
            </div>
            <div className='banner-imagem'>
                <img src='images/img-banner.png' alt='Modelos do banner'/>
            </div>
        </div>
    )
}

export default Banner