import { useState } from "react";
import Cart from "../cart/Cart";
import { useEffect } from "react";
import Card from "./Card";

const Home = () => {
  const [courses, setCourses] = useState([]);

  const [selectCourse, setSelectCourse] = useState([]);

  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [remainingCreditHour, setRemainingHour] = useState(0);

  const handleSelectCourse = (course) => {
    let credit = course.credit;

    let price = course.price;

    const isExist = selectCourse.find((item) => item.id === course.id);

    if (isExist) {
      return alert("already added");
    } else {
      selectCourse.forEach((item) => {
        credit += item.credit;
      });

      selectCourse.forEach((course) => {
        price += parseFloat(course.price + price);
      });

      if (credit > 20) {
        return alert("cant exceed 20 up");
      }
      setTotalCredit(credit);

      setTotalPrice(parseFloat(price.toFixed(2)));

      setSelectCourse([...selectCourse, course]);

      setRemainingHour(20 - credit);
    }
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap flex-col-reverse md:flex-row gap-6 pb-10 ">
      <div className="grid place-items-center md:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  md:w-4/5 gap-6">
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
