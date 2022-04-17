import "./CareerMap.css";
import CardGrid from "../components/CardGrid/CardGrid.js";
import InteractiveBackground from "../components/InteractiveBackground.js";
import "@fontsource/poppins";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer.js";
import { Parallax} from "react-parallax";
import landingPage from "../assets/graphics/landingPage.png";
import React, {useState,useEffect} from 'react'


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};
function CareerMap() {

  let [notes,setNotes]=useState([])
  useEffect(() => {
    getNotes()
  }, [])
  let getNotes = async () =>{
    let response = await fetch("http://127.0.0.1:8000/api/notes/")
    let data = await response.json()
    console.log('Data:',data)
    setNotes(data)
  }
  return (
    <div>
      <InteractiveBackground />

      <div style={styles}>
        <Parallax
          bgImage={landingPage}
          bgImageSize={{ height: "30px", maxWidth: "30px" }}
          strength={70}
        >
          <div style={{ height: 900 }}>
            <Header />
          </div>
        </Parallax>
        <Parallax strength={100}>
          <div style={{ height: "100%", display: "inline-block" }}>
            <div id="intro">
              <h1>Career Map</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
                interdum lacus orci mi potenti sapien malesuada accumsan sed.
                Diam maecenas viverra dictumst orci pellentesque phasellus.
              </p>
            </div>
            <CardGrid cardType={"careerMap"} />
          </div>
        </Parallax>
        <Parallax strength={200}>
          <div
            style={{ opacity: 0.5, backgroundColor: "#F7C6BC", height: 300 }}
          >
            <Footer />
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default CareerMap;
