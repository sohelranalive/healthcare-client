import Container from "../../../components/Container";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <div>
            {/* Page Banner */}
            <div className="page-banner flex items-center"></div>
            {/* Page Content */}
            <Container>
                <div className="py-20 text-center space-y-5">
                    <h3 className="text-xl font-semibold">Get in touch</h3>
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    {/* Contact Form */}
                    <ContactForm></ContactForm>
                </div>
            </Container>
        </div>
    );
};

export default Contact;