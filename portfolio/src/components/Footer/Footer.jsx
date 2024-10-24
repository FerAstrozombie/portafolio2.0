import "./styles.css"

const Footer = () => {

    return (
        <footer className="footerFlex" id="footer">
            <a className="icono" href="https://github.com/FerAstrozombie" target="_blank" rel="noopener noreferrer">
                <img id="tamañoLogosFooter" src="/imagenes/logogithub.png" alt="" />
            </a>
            <a className="icono" href="https://www.linkedin.com/in/fernandorenelair" target="_blank" rel="noopener noreferrer">
                <img id="tamañoLogosFooter" src="/imagenes/logolinkedin.png" alt="" />
            </a>
            <div className="flexEmail">
                <a className="icono" href="https://api.whatsapp.com/send?phone=+54 9 11 6288-5828&text=Hola, Necesito mas informacion!" target="_blank">
                    <img id="tamañoLogosFooter" src="/imagenes/whatsaap.png" alt="whatsaap image" />
                </a>
                <p className="email">fernandorenelair@gmail.com</p>
            </div>
        </footer>
    )
}

export default Footer