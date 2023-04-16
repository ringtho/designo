import { data } from "../data"
import backgroundCircle from "../assets/home/desktop/bg-pattern-hero-home.svg"

const SoftSkill = ({name, pic, description, id}) => {
    return (
        <div className="soft-skills-container">
            <div className="soft-skills-image">
                <img src={backgroundCircle} 
                    alt="background-circle" 
                    className={`soft-skills-circle 
                    ${id==="passionate" && "circle-passionate"}
                    ${id==="resourceful" && "circle-resourceful"}
                    ${id==="friendly" && "circle-friendly"}
                `} />
                <img src={pic} alt={id} className="skills-pic" />
            </div>
            <div className="soft-skills-desc">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

const SoftSkills = () => {

    const softSkillElements = data.softSkills.map((item, idx) => {
        return <SoftSkill key={idx} {...item} />
    })

    return (
        <section className="soft-skills">
            {softSkillElements}
        </section>
    )
}

export default SoftSkills