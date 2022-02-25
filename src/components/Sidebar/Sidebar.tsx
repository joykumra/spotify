import React from "react";
import {
  Home,
  Search,
  LibraryMusic,
  AddBox,
  Favorite,
  Podcasts,
} from "@mui/icons-material";
import SidebarOption from "./SidebarOption";
import { useStateValue } from "../../store/context";

function Sidebar() {
  const [{ playlist }] = useStateValue();
  return (
    <div className="basis-1/5 min-w-[230px] h-screen px-[10px] text-[12px] tracking-wider text-white bg-primary-black-sidebar">
      <img
        className="w-[180px] object-contain p-[10px] mr-auto"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      ></img>
      <SidebarOption title="Home" icon={<Home />} />
      <SidebarOption title="Search" icon={<Search />} />
      <SidebarOption title="Your Library" icon={<LibraryMusic />} />

      <div className="mt-[20px]">
        <SidebarOption title="Create Playlist" icon={<AddBox />} />
        <SidebarOption
          title="Liked Songs"
          icon={<Favorite style={{ color: "rgb(255,77,106)" }} />}
        />
        <SidebarOption
          title="Your Episodes"
          icon={<Podcasts style={{ color: "#1db954" }} />}
        />
      </div>

      <hr className="w-[90%] mx-auto my-[10px] boder-[1px] border-solid border-primary-black-footer"></hr>

      <div className="ml-[5px] overflow-scroll">
        <SidebarOption title="My Playlist #1"></SidebarOption>
        {playlist.map((name, index) => {
          return <SidebarOption key={index} title={name}></SidebarOption>;
        })}
      </div>
    </div>
  );
}

export default Sidebar;
