import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import LocationCard from "../components/LocationCard"
import { useForm } from "react-hook-form"


const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(data);
    const errorMessage = {
        required: "Can't be empty",
        email: "Please use a valid email address"
    }
    return (
        <div className="app app-contact">
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
                            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                <input 
                                    className="name-input" 
                                    type="text" 
                                    name="name" 
                                    placeholder="Name" 
                                    {...register("name", {required: true})}
                                    
                                />
                                {errors?.name?.type === "required" && 
                                <p className="error">{errorMessage.required}
                                <i className="fa-solid fa-circle-exclamation"></i>
                                </p> }
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email" 
                                    {...register("email", 
                                    {pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 
                                    required: true})} 
                                    className="email-input" 
                                />
                                {errors?.email?.type === "required" && 
                                <p className="error">{errorMessage.required}
                                <i className="fa-solid fa-circle-exclamation"></i>
                                </p> }
                                {errors?.email?.type === "pattern" && 
                                <p className="error">{errorMessage.email}
                                <i className="fa-solid fa-circle-exclamation"></i>
                                </p>}
                                <input 
                                    type="text" 
                                    name="phone" 
                                    placeholder="Phone" 
                                    {...register("phone")} 
                                />
                                <textarea 
                                    name="message" 
                                    placeholder="Your Message" 
                                    {...register("message", {required: true})} 
                                />
                                {errors?.message?.type === "required" && 
                                <p className="error">{errorMessage.required}
                                <i className="fa-solid fa-circle-exclamation"></i>
                                </p> }
                                <div className="form-btn-container">
                                    <button type="submit">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </section>
                <div className="locationCard-container">
                    <LocationCard />
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Contact