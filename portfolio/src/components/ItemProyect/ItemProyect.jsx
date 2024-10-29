import "./styles.css"
import Item from "../Item/Item"

const ItemProyect = ({lista}) => {
    return(
        (
        <>
            <h2 className="cursoTitulo"><span> &lt; Proyectos 📝 /&gt; </span></h2>
        <div className="flexProyectos">
            {
                lista.map((proyecto, nombre) => (
                    <Item
                    key={nombre}
                    nombre={proyecto.nombre}
                    img={proyecto.img}
                    link={proyecto.link}
                    descripcion={proyecto.descripcion}
                    github={proyecto.github}
                />))
            }
        </div>
        </>
    ))
}

export default ItemProyect