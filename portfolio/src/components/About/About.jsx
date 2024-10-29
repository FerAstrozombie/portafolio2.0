import ScrollButton from "../ScrollButton/ScrollButton"
import "./styles.css"

const About = () => {

    return (
        <div className="about" id="sobreMi">
                <img className="fotoPerfil" src="/imagenes/fotoperfil.svg" alt="FotoDePerfil" />
            <div className="flexText">
                <h3 className="descripcion">Hola 😎 Soy Fernando, <span> &lt;desarrollador Fullstack M.E.R.N.💻 /&gt; </span></h3>
                <p className="descripcion">Soy una persona proactiva y me gusta el trabajo en equipo. Constantemente estoy en busca de nuevos desafios que pongan a prueba todo lo que aprendi. Tengo muy buena capacidad para la resolucion de problemas. </p>
                <p className="descripcion"> Realizo proyectos freelance y siempre estoy buscando proyectos para aplicar mis conocimientos e incorporar nuevos para seguir progresando como desarrollador.</p>
            </div>
            <ScrollButton />
        </div>
    )
}

export default About