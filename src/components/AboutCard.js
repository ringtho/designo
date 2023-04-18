import useWindowSize from "../hooks/useWindowSize"


const AboutCard = (props) => {
    const {
        mobileImg, 
        tabletImg,
        desktopImg, 
        title, 
        paragraph1, 
        paragraph2
    } = props

    /* Check for screen size*/
    const windowSize = useWindowSize() 
    const isMobile = windowSize <= 375
    const isTablet = windowSize > 375 && windowSize < 1080
    const isDesktop = windowSize >= 1080

    const getImg = () => {
        if(isMobile){
            return mobileImg
        } else if (isTablet){
            return tabletImg
        } else if (isDesktop){
            return desktopImg
        }
    }
    
    const img = getImg()

    return (
        <section className="about-hero">
            <img src={img} alt={title} className="about-hero-image" />
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