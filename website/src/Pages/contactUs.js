import ContactUs from "../Components/contactUs";


const ContactUsPage = () => {
    return (
        <div>
            <h1 className="text-center">Contact Us</h1><br/>
            <p style={{textAlign: "justify"}} >If you have any questions or concerns about our
            services, please do not hesitate to contact us. We are always happy to assist.</p>
            <ContactUs/>
        </div>
    )
}

export default ContactUsPage