const TuitionCard = ({ singleData }) => {
  const { description, subject, price, email, profile_picture, full_name } =
    singleData;

  return (
    <section className=" border bg-neutral-100 p-4 rounded-lg ">
      <div className="mx-auto">
        <div className="card flex flex-row max-w-lg">
          <div className="w-24 h-28  mx-auto mb-6 md:mr-6 flex-shrink-0">
            <img
              className=""
              src={profile_picture}
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <p className="font-bold">Senior Developer</p>
            <h3 className="text-xl heading">{full_name}</h3>
            <p className="mt-2 mb-3">{description}</p>
            <div>
              <span className="bg-gray-200 border px-3 py-1.5 rounded-lg text-sm">
                {subject}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TuitionCard;
