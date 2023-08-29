import './Informacao.css'

const Informacao = (props) => {
    return (
        <div className={'informacao ' + props.classe }>
            <div className="conteudo-informacao">
            <img src={props.imagem} alt={props.alternativo}/>
            <h3>{props.titulo}</h3>
                <p>{props.paragrafo}</p>
            </div>
            <div className='vazio-informacao'></div>
        </div>
    )
}

export default Informacao