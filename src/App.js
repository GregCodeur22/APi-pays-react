import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./component/Card";

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("test");
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + input)
      .then((res) => setData(res.data.meals));
  }, [input]);

  return (
    <div className="app-container">
      <h1>React Cook</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="meals-container">
        {data &&
          data
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meal={meal} />)}
      </div>
    </div>
  );
};

export default App;
