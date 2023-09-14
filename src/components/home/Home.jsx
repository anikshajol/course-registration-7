import { useState } from "react";
import Cart from "../cart/Cart";
import { useEffect } from "react";
import Card from "./Card";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap flex-col-reverse md:flex-row  ">
      <div className="grid place-items-center md:place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  md:w-4/5 gap-6">
        {courses.map((course) => (
          <Card key={course.id} course={course}></Card>
        ))}
      </div>
      <Cart></Cart>
    </div>
  );
};

export default Home;
