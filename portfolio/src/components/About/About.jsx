import "./styles.css"

const About = () => {

    return (
        <div className="about" id="sobreMi">
            <div>
                <img className="fotoPerfil" src="../../../public/imagenes/fotoperfil.svg" alt="FotoDePerfil" />
            </div>
            <div className="flexText">
                <h3>Hola 😎 Soy Fernando, <span> &lt;desarrollador Fullstack M.E.R.N.💻 /&gt; </span></h3>
                <p className="descripcion">Pero que es M.E.R.N.?</p>
                <p className="descripcion">Es un stack teconologico. M significa MongoDB, que es una base de datos no relacional. E es ExpressJs, que utilizo para crear la magia de mi Backend. R. es Ractjs, que es el framework que le da vida a mi Frontend. N es NodeJs, que es el entorno de ejecucion de Javascript.</p>
                <p className="descripcion">Soy una persona proactiva y me gusta el trabajo en equipo. Constantemente estoy en busca de nuevos desafios que pongan a prueba todo lo que aprendi. Tengo muy buena capacidad para la resolucion de problemas. </p>
                <p className="descripcion"> Realizo proyectos freelance y siempre estoy buscando proyectos para aplicar mis conocimientos e incorporar nuevos para seguir progresando como desarrollador.</p>
            </div>
        </div>
    )
}

export default About