import { useNavigate } from "react-router-dom"

const GetInTouch = () => {
    
    const navigate = useNavigate()
    const onClick = () => {
        navigate('/contact')
    }

    return (
        <section className="get-in-touch-section">
            <div className="black"></div>
            <div className="get-in-touch">
                <div className="get-in-touch-wrapper">
                    <div className="get-in-touch-container">
                        <h2>Let’s talk about your project</h2>
                        <p>
                        Ready to take it to the next level? Contact us today and find out 
                        how our expertise can help your business grow.
                        </p>
                        <button className="footer-btn" onClick={onClick}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch