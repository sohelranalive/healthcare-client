const Statistics = () => {
    return (
        <div className="border border-red-500 py-20">
            <h1 className="text-4xl font-semibold text-[#007E85] text-center">Our results in numbers</h1>
            <br /><br />
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-4xl font-semibold text-[#007E85] text-center">99 %</p>
                    <p>Customer Satisfaction</p>
                </div>
                <div>
                    <p className="text-4xl font-semibold text-[#007E85] text-center">15 K</p>
                    <p>Online Patients</p>
                </div>
                <div>
                    <p className="text-4xl font-semibold text-[#007E85] text-center">12 K</p>
                    <p>Patients Recovered</p>
                </div>
                <div>
                    <p className="text-4xl font-semibold text-[#007E85] text-center">85%</p>
                    <p>Repeat Customer</p>
                </div>
                <div>
                    <p className="text-4xl font-semibold text-[#007E85] text-center">240 %</p>
                    <p>Company Growth</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;