import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skill from "./Components/Skills/Skills";
import ProjectList from "./Components/ProjectList";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  // State to track selected project id
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  return (
    <div className="app-container">
      {/* Agar koi project select hua hai to baki components hide karo */}
      {!selectedProjectId && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Skill />
          <ProjectList onSelectProject={setSelectedProjectId} />
          <Contact />
          <Footer />
        </>
      )}

      {/* Agar koi project select hua hai to sirf uska detail dikhao */}
      {selectedProjectId && (
        <ProjectList
          selectedProjectId={selectedProjectId}
          onSelectProject={setSelectedProjectId}
          singleView={true}
        />
      )}
    </div>
  );
};

export default App;
