

const AppCard = ({img, title, description}) => {
    return (
        <section className="apps-card">
            <div className="apps-card-container">
                <img src={img} alt={title} className="apps-card-image" />
                <div className="apps-card-desc">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
}

export default AppCard