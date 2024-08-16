import { useContext } from "react";
import { useLoaderData } from "react-router-dom";

import { AuthContext } from '../Provider/AuthProvider';
const ServiceDetails = () => {
  const {user } = useContext(AuthContext);
  console.log(user?.email);

  const handleProposal = ()=>{
    
  }

  const serviceData = useLoaderData();
  const {
    description,
    subject,
    price,
    email,
    profile_picture,
    full_name,
    _id,
  } = serviceData || {};
  // console.log(_id)
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={profile_picture}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{full_name}</h2>
        <h2 className="font-bold">{price} taka/month</h2>
        <p className="font-bold">{subject}</p>

        <p>{description}</p>

        {/* <input className="bg-red-500" type="text" /> */}
        <div className="card-actions justify-end">
        {/* <p className="font-bold">{study}</p> */}

        <p className="font-bold">{email}</p>
          <button onClick={handleProposal} className="btn btn-primary">Send Proposal</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
