'use client'

const TeamCard = ({ src, name, designation }) => {
  return (
    <div className="flex flex-col justify-center items-start">
      <div className="w-45vw md:w-30vw lg:w-25vw xl:w-17vw 2xl:w-250px">
        <img src={src} alt={"team member image"} />
      </div>
      <p className="font-silka font-semibold text-16px lg:text-16px base:text-14px my-0.5rem lg:line-height-2rem base:line-height-1.2rem">
        {name}
      </p>
      <p className="font-silka text-12px lg:text-14px pb-2">{designation}</p>
    </div>
  );
};

export default TeamCard;
