

const Hero = ({title, description}) => {
    return (
        <section className="design-hero">
            <div className="design-hero-content">
                <h2>{title}</h2>
                <p>
                {description}
                </p>
            </div>
        </section>
    )
}

export default Hero