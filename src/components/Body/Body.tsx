import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "../../store/context";
import Header from "./Header";
import {
  PlayCircleFilled,
  Favorite,
  MoreHoriz,
  AccessTime,
} from "@mui/icons-material";
import SongRow from "./SongRow";

const Body: React.FC<{ spotify: SpotifyWebApi.SpotifyWebApiJs }> = (props) => {
  const [{ album }] = useStateValue();

  return (
    <div className="basis-4/5 h-screen pb-[30px] overflow-scroll text-white bg-gradient-to-b from-primary-purple to-primary-black-body">
      <Header spotify={props.spotify}></Header>

      <div className="flex items-end mb-[30px] px-[30px]">
        <img
          src={album.img}
          alt="BTFU"
          className="sm:h-[220px] w-[220px] object-cover border-[1px] border-black"
        ></img>
        <div className="ml-[30px]">
          <p className="uppercase text-[12px] font-medium">Playlist</p>
          <p className="text-[40px] xl:text-[75px] font-bold tracking-tight leading-tight">
            {album.name}
          </p>
          <p className="text-[13px]">
            <span className="text-whtie font-medium">
              {album.owner} : {album.tracks.total} songs
            </span>
          </p>
        </div>
      </div>

      <div className="mb-[20px] px-[30px]">
        <PlayCircleFilled
          sx={{ fontSize: "60px" }}
          className="text-primary-green"
        ></PlayCircleFilled>
        <Favorite
          fontSize="large"
          className="ml-[20px] text-gray-300"
        ></Favorite>
        <MoreHoriz
          fontSize="large"
          className="ml-[20px] text-gray-400"
        ></MoreHoriz>
      </div>

      <div className="mb-[100px]">
        <div
          className={`flex items-center justify-between sticky top-0 w-full uppercase text-[12px] text-gray-400 bg-[#1c1919] py-[5px] border-b-[1px] border-solid border-gray-400 px-[30px]`}
        >
          <div className="flex items-center">
            <p className="ml-[20px] w-[20px] text-right">#</p>
            <p className="ml-[20px] w-[300px]">Title</p>
          </div>
          <p className="w-[100px] ml-[10px] hidden md:block">Album</p>
          <p className="w-[100px] ml-[10px] hidden lg:block">Date added</p>
          <p className="w-[50px] pr-[40px] ml-[10px]">
            <AccessTime></AccessTime>
          </p>
        </div>

        {album.tracks.items.map((item, index) => {
          return (
            <SongRow
              key={index}
              id={index + 1}
              albumName={album.name}
              track={item}
            ></SongRow>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
