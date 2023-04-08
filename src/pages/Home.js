

const Home = () => {
    return (
        <>
        <header className="nav-items">
            <div className="logo-container">
                <div className="header-circle"></div>
                <h1 className="title">DESIGNO</h1>
            </div>
            <div className="icon-container">
            <i className="fa-solid fa-bars"></i>
            </div>
        </header>
        <main>
            <section className="hero">
                <div className="hero-circle"></div>
                <div className="hero-content">
                    <h2>Award-winning custom designs and digital branding solutions</h2>
                    <p>With over 10 years in the industry, we are experienced in creating 
                        fully responsive websites, app design, and engaging brand experiences. 
                        Find out more about our services.</p>
                    <button className="hero-btn">LEARN MORE</button>
                </div>
                <div className="hero-image"></div>
            </section>

        </main>
        </>

    )
}

export default Home