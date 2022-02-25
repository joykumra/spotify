import React from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useStateValue } from "../../store/context";

const Header: React.FC<{ spotify: SpotifyWebApi.SpotifyWebApiJs }> = (
  props
) => {
  const [{ user }] = useStateValue();
  return (
    <div className="flex justify-between my-[30px] px-[30px]">
      <div className="flex items-center">
        <div className="mr-[20px] p-[5px] bg-[rgba(0,0,0,0.4)] rounded-full">
          <ArrowBackIosNew></ArrowBackIosNew>
        </div>
        <div className="p-[5px] bg-[rgba(0,0,0,0.4)] rounded-full">
          <ArrowForwardIos></ArrowForwardIos>
        </div>
      </div>
      <div className="flex items-center bg-black rounded-full text-[14px] font-medium">
        <Avatar
          src={user.img}
          alt={user.name}
          sx={{ height: "30px", width: "30px" }}
        ></Avatar>
        <div className="pr-[20px] pl-[10px]">{user.name}</div>
      </div>
    </div>
  );
};

export default Header;
