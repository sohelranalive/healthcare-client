import whyUSImage from '../../../assets/why-us.jpg'
import { BsArrowRight } from 'react-icons/bs';

const ServiceCard = ({ service }) => {

    const { service_dialouge, service_name } = service

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-6 pt-6">
                <img src={whyUSImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service_name}</h2>
                <p className='text-justify'>{service_dialouge}</p>
                <div className="card-actions">
                    <button className=" ">
                        <div className='flex items-center font-semibold text-[#007E85]'>
                            <p>Learn More</p>
                            <p><BsArrowRight /></p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;