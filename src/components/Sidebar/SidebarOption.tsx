import { SvgIconProps } from "@mui/material";
import React from "react";

const SidebarOption: React.FC<{ title: string; icon?: SvgIconProps }> = (
  props
) => {
  return (
    <div
      className={`flex items-center text-gray-400 hover:text-white cursor-pointer transition-colors ${
        props.icon ? "h-[40px] font-semibold" : "h-[30px]"
      }`}
    >
      {props.icon && <div className="px-[10px]">{props.icon}</div>}
      <p className="pl-[5px]">{props.title}</p>
    </div>
  );
};

export default SidebarOption;
