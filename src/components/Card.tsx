import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

import { UserProps } from "./User.types";

const Card = (props: UserProps): JSX.Element => {
  const { name, email, phone, website, username } = props;
  let img_url = `https://avatars.dicebear.com/v2/avataaars/{{${username}}}.svg?options[mood][]=happy`;

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
        <div className="img-container relative pb-40 overflow-hidden bg-gray-100">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={img_url}
            alt="profile_image"
          />
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-3 font-bold">{name}</h2>
          <span className="flex items-center mb-1">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="text-xs ml-2">{email}</span>
          </span>
          <span className="flex items-center mb-1">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-xs ml-2">{phone}</span>
          </span>
          <span className="flex items-center mb-1">
            <FontAwesomeIcon icon={faGlobe} />
            <span className="text-xs ml-2">{website}</span>
          </span>
        </div>
        <div className="p-4 border-t border-b">
          <span className="flex justify-around">
            <FontAwesomeIcon icon={faHeart} className="text-red-600" />
            <FontAwesomeIcon icon={faPenToSquare} />
            <FontAwesomeIcon icon={faTrashCan} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
