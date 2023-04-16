
const AboutCard = ({img, title, paragraph1, paragraph2}) => {
    return (
        <section className="about-hero">
            <img src={img} alt="" className="about-hero-image" />
            <div className="about-descriptions">
                <div className="about-descriptions-wrapper">
                    <div className="about-description-content">
                        <h2>{title}</h2>
                        <p>
                        {paragraph1} 
                        </p>
                        <p>
                        {paragraph2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutCard