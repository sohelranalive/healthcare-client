import Container from "../../../components/Container";
import Banner from "../Banner/Banner";
import FindDoctor from "../FindDoctor/FindDoctor";
import OurNewsletter from "../OurNewsletter/OurNewsletter";
import OurServices from "../OurServices/OurServices";
import OurTeam from "../OurTeam/OurTeam";
import Partners from "../Partners/Partners";
import Statistics from "../Statistics/Statistics";
import Testimonial from "../Testimonial/Testimonial";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <FindDoctor></FindDoctor>
            <Statistics></Statistics>
            <WhyUs></WhyUs>
            <OurServices></OurServices>
            <OurTeam></OurTeam>
            <Testimonial></Testimonial>
            <Partners></Partners>
            <OurNewsletter></OurNewsletter>
        </Container>
    );
};

export default Home;