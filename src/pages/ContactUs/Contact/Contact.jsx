import Container from "../../../components/Container";
import ContactForm from "../ContactForm/ContactForm";

const Contact = () => {
    return (
        <div>
            {/* Page Banner */}
            <div className="others-page-banner flex items-center">
                <Container>
                    <div className="w-full flex flex-col items-center text-white">
                        <h1 className="text-4xl font-semibold mb-2">Fill out this form for any kind of query</h1>
                        <p>You will get a reply within 24 hours. We are ready to response for any kind of query of partnerships</p>
                    </div>
                </Container>
            </div>
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