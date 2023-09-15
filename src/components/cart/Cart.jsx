import PropTypes from "prop-types";

const Cart = ({
  selectCourse,
  totalCredit,
  totalPrice,
  remainingCreditHour,
}) => {
  return (
    <div className="bg-white h-full  md:w-[25%] p-4 rounded-xl">
      <h2 className="border-b-2 pb-4 text-lg text-blue-700 font-bold">
        Credit Hour Remaining {remainingCreditHour} hr
      </h2>

      <div className="py-4 border-b-2 pb-4">
        <h2 className="text-xl font-bold pb-5">Course Name</h2>

        {selectCourse.map((course) => (
          <li className="list-[number] text-[#1C1B1B99]" key={course.id}>
            {course.course_name}
          </li>
        ))}
      </div>
      <div className="border-b-2 pb-4">
        <p className="pt-4 font-semibold text-[#1C1B1B99]">
          Total Credit Hour : {totalCredit}
        </p>
      </div>
      <div className="pt-4 text-[#1C1B1B99] font-bold">
        <h2>Total Price : {totalPrice} USD</h2>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectCourse: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  remainingCreditHour: PropTypes.number.isRequired,
};

export default Cart;
