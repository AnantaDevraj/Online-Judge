import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mid from "./components/Mid";
function App(){

  return (
    <>
    <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow">
                <Mid />
            </div>
            <Footer />
      </div>
    </>
  );
}

export default App;