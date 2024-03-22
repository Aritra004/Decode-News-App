import { useState } from "react";
import Navbar from "./components/Navbar";
import Newsboard from "./components/Newsboard";

function App() {
  const [category, setCategory] = useState("general");
  const [country, setCountry] = useState("in");
  return (
    <>
      <Navbar
        setCategory={setCategory}
        setCountry={setCountry}
        country={country}
      />
      <Newsboard category={category} country={country} />
    </>
  );
}

export default App;
