const FindDoctor = () => {
    return (
        <div className="bg-white rounded-lg pt-6 pb-8 px-6">
            {/* title area */}
            <div>
                <h1 className="text-4xl font-semibold">Find A Doctor</h1>
            </div>
            <br />
            {/* Search area */}
            <div className="flex items-center justify-between gap-6">
                <div className="w-4/12">
                    <input className="input border border-[#007E85] w-full" placeholder="Name"></input>
                </div>
                <div className="w-4/12">
                    <input className="input border border-[#007E85] w-full" placeholder="Specialty"></input>
                </div>
                <div className="w-3/12">
                    <div className="w-full flex justify-center">
                        <div className="form-control w-52">
                            <label className="cursor-pointer label">
                                <span className="label-text">Available</span>
                                <input type="checkbox" className="toggle bg-[#007E85] text-[#007E85]" />
                            </label>
                        </div>
                    </div>
                </div>
                <div className="w-1/12 flex justify-end">
                    <button className='primary-button'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default FindDoctor;