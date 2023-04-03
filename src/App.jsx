import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import Spinner from "./components/Spinner";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("error happen");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-500">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh] flex-wrap">{loading ? <Spinner /> : <Cards courses={courses} category={category} />}</div>
      </div>

    </div>
  );
};

export default App;

