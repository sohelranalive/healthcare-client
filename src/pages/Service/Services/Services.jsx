import useService from '../../../hooks/useService';
import ServiceCard from '../../Shared/ServiceCard/ServiceCard';

const Services = () => {

    const [, , allService] = useService()

    return (
        <div className="space-y-8 py-10">
            {/* title and sub title */}
            <div className="w-1/2 mx-auto text-center space-y-4">
                <h1 className="text-4xl font-semibold text-[#007E85]">Services we provide</h1>
                <p className="">We provide different services. Our specialized doctors are always ready to serve you. You will be satisfied for sure.</p>
            </div>
            {/* services */}

            <div className='grid grid-cols-3 gap-8'>
                {/* card 1 */}
                {
                    allService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;