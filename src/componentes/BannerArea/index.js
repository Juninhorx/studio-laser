import Banner from '../Banner'
import TituloInferior from '../TituloInferior'
import './BannerArea.css'

const BannerArea = () => {
    return (
        <section>
            <header>
                <img className='logo' src='images/logo.png' alt='logo da studio laser.'></img>
            </header>
            <Banner/>
            <TituloInferior/>   
        </section> 
    )
}

export default BannerArea