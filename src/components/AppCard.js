import img1 from "../assets/web-design/desktop/image-blogr.jpg"


const AppCard = ({img, title, description}) => {
    console.log(typeof(img), typeof(img1))
    console.log(img, img1)
    console.log(img  === img1)
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