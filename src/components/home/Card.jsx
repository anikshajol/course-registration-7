import PropTypes from "prop-types";

import { BsBook } from "react-icons/bs";

const Card = ({ course, handleSelectCourse }) => {
  const { image, course_name, course_details, price, credit } = course;

  return (
    <div>
      <div className="card  h-[400px] bg-white shadow-xl">
        <figure className="px-2 pt-2 ">
          <img
            src={image}
            alt={course_name}
            className="rounded-xl object-cover"
          />
        </figure>
        <div className=" py-4 flex-none px-0 items-center">
          <h2 className=" font-bold pb-3 text-center text-lg">{course_name}</h2>

          <p className=" text-[#1C1B1B99] text-justify px-4 ">
            {course_details.length > 30
              ? course_details.slice(0, 70) + "..."
              : course_details}
          </p>
        </div>

        <div className="flex pb-4 justify-between px-4">
          <p>
            <span className="font-semibold">$</span> Price: {price}
          </p>

          <p className="flex items-center gap-2">
            <BsBook />
            Credit: {credit} hr
          </p>
        </div>

        <div className="card-actions p-4">
          <button
            onClick={() => handleSelectCourse(course)}
            className="btn btn-primary w-full hover:outline-none"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectCourse: PropTypes.func,
};

export default Card;
