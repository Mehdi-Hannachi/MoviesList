import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";

function App() {
  const movies = [
    {
      id: 1,
      title: "Film one",
      img: "https://www.denofgeek.com/wp-content/uploads/2017/12/must-see-movies-2018.jpg?fit=830%2C470",
    },
    {
      id: 2,
      title: "Film Two",
      img: "https://www.denofgeek.com/wp-content/uploads/2017/12/must-see-movies-2018.jpg?fit=830%2C470",
    },
    {
      id: 3,
      title: "Film three",
      img: "https://www.denofgeek.com/wp-content/uploads/2017/12/must-see-movies-2018.jpg?fit=830%2C470",
    },
  ];

  const [textFilter, setTextFilter] = useState("");

  return (
    <div className="App">
      <Header setTextFilter={setTextFilter} />
      <MoviesList movies={movies} textFilter={textFilter} />
    </div>
  );
}

export default App;
