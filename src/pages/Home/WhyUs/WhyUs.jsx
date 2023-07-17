import whyUSImage from '../../../assets/why-us.jpg'

const WhyUs = () => {
    return (
        <div className="border border-red-400 flex items-center py-20">
            <div className="w-1/2 pr-28 border">
                <h1 className="text-4xl font-semibold text-[#007E85]">You have lots of reason to choose us</h1>
                <br />
                <p>Our reputation for outstanding care and family-like atmosphere, together with advanced medical technology.</p>
                <br /><br />
                <div className="space-x-6">
                    <button className="bg-[#007E85] text-white rounded-button">Get Started</button>
                    <button className="bg-white text-[#007E85] rounded-button">Talk to Sales</button>
                </div>
            </div>
            <div className="w-1/2 border">
                <img src={whyUSImage} alt="" className='rounded-lg' />
            </div>
        </div>
    );
};

export default WhyUs;