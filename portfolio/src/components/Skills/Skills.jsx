import "./styles.css"
import imagenes from "../../exports/imagenes"

const Skills = () => {

    return (
        <div className="skillsTec">
            <h3 className="skills"><span> &lt; Skills tecnologicos 🤖 /&gt; </span></h3>
            <div className="centrado">
            {imagenes.map((image, id) =>(
                        <div className="item" key={id}>
                            <img src={image} alt=""></img>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Skills