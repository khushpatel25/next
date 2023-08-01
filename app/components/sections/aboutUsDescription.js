
const AboutUsDescription = ({ title, titleDesc, Desc1, Desc2, id }) => {

    return (
        <div
            ref={id}
            className="w-full h-70 lg:h-60 flex flex-col justify-center items-center lg:text-center md:text-center text-start gap-3rem text-16px mt-[5rem]"
        >
            <div
                className="w-90vw flex flex-col justify-center items-start md:items-center gap-3rem mt-20 px-7"
            >
                <div className="flex flex-col justify-center items-start md:items-center">
                    <h1 className="pb-1.2rem font-silka font-semibold text-18px lg:text-22px md:text-20px">
                        {title}
                    </h1>
                    <p
                        className="max-w-370px font-silka text-14px lg:text-14px text-gray-600 leading-189% mt-5"
                    >
                        {titleDesc}
                    </p>
                </div>
                <div className="w-70vw flex flex-col justify-center items-center text-gray-800 px-5">
                    <p
                        className="pb-2rem font-silka font-medium text-14px lg:text-14px mt-10"
                    >
                        {Desc1}
                    </p>
                    <p className="font-silka font-medium text-14px lg:text-14px mt-10">
                        {Desc2}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsDescription;
