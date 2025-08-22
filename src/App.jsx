import React from "react";
import Card from "./Components/Card";
import "./index.css"; // Ensure your styles are imported
import Card2 from "./Components/Card2.jsx";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-[#2A2E34] to-[#525252] ">
      <Card />
      <Card2 />
    </div>
  );
};

export default App;
