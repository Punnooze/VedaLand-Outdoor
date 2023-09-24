import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer(props) {
  const colour = props.colour || {};
  return (
    <div
      className={` md:absolute inset-x-0 bottom-0 md:h-[20vh]  flex items-center justify-center p-[20px] bg-${colour}2 shadow-3xl`}
    >
      <div
        className={`grid grid-cols-7  md:grid-cols-8 gap-[30px] mb-[20px] md:mb-[0] text-${colour}5`}
      >
        {/* <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p> */}
        <div
          id="about"
          className={` flex flex-col justify-center items-center align-middle col-span-3 md:col-span-2 `}
        >
          <span>About us!</span>
          Navigate within Technopark
          <br />
          Lets explore the Vedic Technopark
        </div>

        <div
          className={` flex flex-col  row-start-2 md:row-start-1 md:col-start-4 md:col-span-2 col-start-2 col-span-5`}
        >
          <p className={`flex align-middle justify-center`}>Contact us</p>
          <div className={`flex justify-around pt-[30px] text-$${colour}5`}>
            <FontAwesomeIcon className={`text-[22px]`} icon={faTwitter} />
            <FontAwesomeIcon className={`text-[22px]`} icon={faInstagram} />
            <FontAwesomeIcon className={`text-[22px]`} icon={faEnvelope} />
          </div>
        </div>

        <div
          id="address"
          className={`col-span-3 flex flex-col justify-center items-center col-start-5 md:col-start-7 md:col-span-2`}
        >
          Msquared Building <br />
          Technopark-Phase 1<br />
          Kazhakkuttom <br />
          Trivandrum
        </div>
      </div>
    </div>
  );
}

export default Footer;
