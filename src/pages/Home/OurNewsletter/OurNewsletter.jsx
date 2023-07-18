const OurNewsletter = () => {
    return (
        <div className="pt-10 pb-20 space-y-4">
            <h1 className="text-4xl text-center font-semibold">Subscribe to our newsletter</h1>

            <div className="w-8/12 mx-auto text-center">
                <input className="py-3 px-4 outline-none border-2 border-[#007E85] rounded-full w-4/6" placeholder="Enter your email"></input>
                <button className="bg-[#007E85] text-white rounded-button w-1/6 ms-4">Subscribe</button>
            </div>
        </div>
    );
};

export default OurNewsletter;