import { useState } from "react";
import Cart from "../cart/Cart";
import { useEffect } from "react";
import Card from "./Card";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [remainingCreditHour, setRemainingCreditHour] = useState(20);

  const handleSelectCourse = (course) => {
    let credit = course.credit;

    let price = course.price;

    const isExist = selectCourse.find((item) => item.id === course.id);

    if (isExist) {
      return MySwal.fire("", "This course is already booked", "warning");
    } else {
      selectCourse.forEach((item) => {
        credit += item.credit;
      });

      selectCourse.forEach((course) => {
        price += parseFloat(course.price + price);
      });

      if (credit > 20) {
        return MySwal.fire("", "Can't take more than 20 Credit", "error");
      }
      setTotalCredit(credit);

      setTotalPrice(Math.round(price));

      setSelectCourse([...selectCourse, course]);

      setRemainingCreditHour(20 - credit);
    }
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex justify-center flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-6 pb-10 ">
      <div className="grid px-4 md:px-0 md:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  md:w-[70%] gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            handleSelectCourse={handleSelectCourse}
            course={course}
          ></Card>
        ))}
      </div>
      <Cart
        totalCredit={totalCredit}
        selectCourse={selectCourse}
        totalPrice={totalPrice}
        remainingCreditHour={remainingCreditHour}
      ></Cart>
    </div>
  );
};

export default Home;
