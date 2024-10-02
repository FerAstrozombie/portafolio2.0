import "./styles.css"

const About = () => {

    return (
        <div className="about">
            <div>
                <img className="fotoPerfil" src="../../../public/imagenes/fotoperfil.svg" alt="FotoDePerfil" />
            </div>
            <div>
                <h3>Hola 😎 Soy Fernando, <span> &lt;desarrollador Fullstack M.E.R.N.💻 /&gt; </span></h3>
                <p className="descripcion">Desde el 2020 comence mi formacion como Desarrollador. Puedo desenvolverme tanto en el Frontend como en el Backend. Aunque lo que mas me gusta es el Backend. Utilizo tecnologias como ReactJs y Javascript para el Frontend, NodeJs y Express para el Backend.</p>
                <p className="descripcion">Utilizo como base de datos principalmente MongoDB, pero tambien bases de datos relacionales</p>
                <p className="descripcion">Soy una persona proactiva y me gusta el trabajo en equipo. Tengo muy buena capacidad para la resolucion de problemas. </p>
                <p className="descripcion"> Realizo proyectos freelance y siempre estoy buscando proyectos para aplicar mis conocimientos e incorporar nuevos para seguir progresando como desarrollador.</p>
            </div>
        </div>
    )
}

export default About