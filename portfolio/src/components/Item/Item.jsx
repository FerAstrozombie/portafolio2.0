import "./styles.css"

const Item = ({ nombre, img, link, descripcion, github }) => {
    return (
        <div className="proyectos" id="proyectos">
            <h4 className="proyectosTitulo">{nombre}</h4>
            <img className="gifs" src={img} alt={nombre} />
            <div className="descripcion">
                <p className="parrafoProyectos">{descripcion}</p>
            </div>
            <div className="linksFlex">
                <div className="flexLink">
                    <h4>Link</h4>
                    <a className="linksProyectos" href={link} target="blank">
                        <button className="botonDemo">Probar</button>
                    </a>
                </div>
                <div className="flexLink">
                    <h4>Repositorio</h4>
                    <a className="linksProyectos" href={github} target="_blank" rel="noopener noreferrer">
                        <img id="tamañoLogos" src="/imagenes/logogithub.png" alt={nombre} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Item