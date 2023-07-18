import Marquee from "react-fast-marquee";
import amazonLogo from '../../../assets/partners/amazon.png'
import alibabaLogo from '../../../assets/partners/alibaba.png'
import ebayLogo from '../../../assets/partners/ebay.png'
import flipKartLogo from '../../../assets/partners/flipKart.png'
import shopifyLogo from '../../../assets/partners/shopify-logo-big.png'

const Partners = () => {
    return (
        <div className="space-y-8 py-10">
            <h1 className="text-4xl text-center font-semibold text-[#007E85]">Trusted by 10,000+ company around the world.</h1>

            {/* Marque */}
            <div className="py-10">
                <Marquee pauseOnHover='true' >
                    <div className="flex items-center space-x-12">
                        <div className="h-24 w-44 border">
                            <img src={amazonLogo} alt="" className="h-full w-full"></img>
                        </div>
                        <div className="h-24 w-44 border">
                            <img src={alibabaLogo} alt="" className="h-full w-full"></img>
                        </div>
                        <div className="h-24 w-44 border">
                            <img src={ebayLogo} alt="" className="h-full w-full"></img>
                        </div>
                        <div className="h-24 w-44 border">
                            <img src={flipKartLogo} alt="" className="h-full w-full"></img>
                        </div>
                        <div className="h-24 w-44 border">
                            <img src={shopifyLogo} alt="" className="h-full w-full"></img>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Partners;