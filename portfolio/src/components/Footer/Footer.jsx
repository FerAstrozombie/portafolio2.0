import "./styles.css"

const Footer = () => {

    return (
        <footer className="footerFlex" id="footer">
            <a href="https://github.com/FerAstrozombie" target="_blank" rel="noopener noreferrer">
                <img id="tamañoLogos" src="../imagenes/logogithub.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/fernandorenelair" target="_blank" rel="noopener noreferrer">
                <img id="tamañoLogos" src="../imagenes/logolinkedin.png" alt="" />
            </a>
            {/* <div className="flexEmail">
                <img id="tamañoLogos" src="../../../public/imagenes/mailt.png" alt="email image" />
                <p>fernandorenelair@gmail.com</p>
            </div>
            <div className="flexEmail">
                <img id="tamañoLogos" src="../../../public/imagenes/whatsaap.png" alt="whatsaap image" />
                <p>+5491162885828</p>
            </div> */}
        </footer>
    )
}

export default Footer