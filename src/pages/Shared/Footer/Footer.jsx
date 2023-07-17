import Container from "../../../components/Container";
import logo from "../../../../public/healthcare-logo.png"

const Footer = () => {
    return (
        <div className="bg-[#007E85] text-white py-12">
            <Container>
                <div className="flex">
                    {/* logo and name */}
                    <div className="w-3/12">
                        <div className="flex items-center">
                            <img src={logo} alt="" />
                            <h1 className="font-semibold text-2xl ms-1">Healthcare</h1>
                        </div>
                        <p>
                            Copyright © 2023 Sohel Rana | All Rights Reserved
                        </p>
                    </div>
                    {/* others features */}
                    <div className="w-9/12 flex justify-between ps-20 pt-3">
                        <div>
                            <h1 className="text-xl">Product</h1>
                            <br />
                            <ul className="space-y-2">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Case Studies</li>
                                <li>Review</li>
                                <li>Updates</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-xl">Company</h1>
                            <br />
                            <ul className="space-y-2">
                                <li>About</li>
                                <li>Contact Us</li>
                                <li>Career</li>
                                <li>Culture</li>
                                <li>Blogs</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-xl">Support</h1>
                            <br />
                            <ul className="space-y-2">
                                <li>Getting Started</li>
                                <li>Help Center</li>
                                <li>Server Status</li>
                                <li>Report a bug</li>
                                <li>Chat Support</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-xl">Follow Us</h1>
                            <br />
                            <ul className="space-y-2">
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>LinkedIn</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;