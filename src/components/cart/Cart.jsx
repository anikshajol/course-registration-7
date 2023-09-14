import PropTypes from "prop-types";

const Cart = ({ selectCourse, totalCredit, totalPrice }) => {
  return (
    <div>
      <h2>course: {selectCourse.length} </h2>
      <h2 className="border-b-2 pb-4">Credit Hour Remaining 7 hr</h2>

      <div className="py-4 border-b-2 pb-4">
        <h2>Course Name</h2>
        {selectCourse.map((course) => (
          <li className="list-[number]" key={course.id}>
            {course.course_name}{" "}
          </li>
        ))}
      </div>
      <div className="border-b-2 pb-4">
        <h2 className="pt-4">Total Credit Hour : {totalCredit}</h2>
      </div>
      <div className="pt-4">
        <h2>Total Price : {totalPrice} USD</h2>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectCourse: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Cart;
