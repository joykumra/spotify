import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

const Player: React.FC<{ spotify: SpotifyWebApi.SpotifyWebApiJs }> = (
  props
) => {
  return (
    <div>
      <div className="flex">
        <Sidebar></Sidebar>
        <Body spotify={props.spotify}></Body>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Player;
