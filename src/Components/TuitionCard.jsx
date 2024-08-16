import { Link } from "react-router-dom";

const TuitionCard = ({ singleData }) => {
  const { description, subject, price, email, profile_picture, full_name,_id } =
    singleData;


  const show = ()=>{
    
  }
  return (
    <section  className=" border bg-neutral-100 p-4 rounded-lg ">
      <div  className="mx-auto">
        <div className="card flex flex-row max-w-lg">
          <div className="w-24 h-28  mx-auto mb-6 md:mr-6 flex-shrink-0">
            <img
              className=""
              src={profile_picture}
            />
          </div>
          <div className="flex-grow text-center md:text-left">
            <p className="font-bold">{subject}</p>
         
            <h3 className="text-xl heading">{full_name}</h3>
            <p className="mt-2 mb-3">{description}</p>
            <h2 className="font-bold">{price} taka/month</h2>
            <div>
            </div>
          </div>
              <Link to={`/service-details/${_id}`} className="btn">Details</Link>
        </div>
      </div>
    </section>
  );
};

export default TuitionCard;
