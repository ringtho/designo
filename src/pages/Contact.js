import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import LocationCard from "../components/LocationCard"


const Contact = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="form-container">
                
                    <div className="contact-container">
                        <div className="contact-wrapper">
                            <div className="contact-heading">
                                <h1>Contact Us</h1>
                                <p>
                                    Ready to take it to the next level? Let’s talk about 
                                    your project or idea and find out how we can help 
                                    your business grow. If you are looking for unique 
                                    digital experiences that’s relatable to your users, 
                                    drop us a line.
                                </p>
                            </div>
                            <form className="form" action="#">
                                <input type="name" name="name" required placeholder="Name" />
                                <input type="email" name="email" required placeholder="Email" />
                                <input type="text" name="phone" placeholder="Phone" />
                                <textarea name="message" placeholder="Your Message" />
                                <button type="submit">SUBMIT</button>
                            </form>
                        </div>
                    </div>

                </section>
                <LocationCard />
            </main>
            <Footer/>
        </>
    )
}

export default Contact