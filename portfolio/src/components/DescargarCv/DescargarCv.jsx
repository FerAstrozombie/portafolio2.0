import "./styles.css";

const DescargarCv = () => {
    return (
    <div className="centrado">
        <button className="botonCv">
            <a
            className="link"
            href="/fernandolair.pdf"
            download= "CvFernandoLair">
            <img className="iconoEmail" src="https://icongr.am/clarity/document.svg?size=119&color=currentColor" alt="icomo documento" />
            CV
            </a>
        </button>
    </div>
    )
}

export default DescargarCv