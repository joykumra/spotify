import React from "react";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  Shuffle,
  Repeat,
  Headset,
  QueueMusic,
  DevicesOther,
  VolumeUp,
} from "@mui/icons-material";
import { Stack, Slider } from "@mui/material";

function Footer() {
  return (
    <div className="flex justify-between items-center fixed bottom-0 h-[80px] w-full p-[20px] text-gray-400 bg-primary-black-footer">
      <div className="basis-3/10 flex items-center justify-between min-w-[120px]">
        <img
          src="https://static.spotboye.com/uploads/adi_2021-7-2-13-25-45_thumbnail.jpg"
          alt="BTFU"
          className="h-[50px] min-w-[60px] w-[60px] object-cover"
        ></img>
        <div className="ml-[10px]">
          <p className="text-[12px] font-medium text-white hover:underline cursor-pointer">
            B.T.F.U
          </p>
          <p className="text-[10px]">
            <span className="hover:border-b-[1px] hover:text-white cursor-pointer">
              Karan Aujla
            </span>
            ,{" "}
            <span className="hover:border-b-[1px] hover:text-white cursor-pointer">
              Tru Skool
            </span>
          </p>
        </div>
      </div>
      <div className="basis-4/10 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-[400px] px-[100px]">
          <Shuffle className="footer-icon"></Shuffle>
          <SkipPrevious className="footer-icon"></SkipPrevious>
          <PlayCircleOutline
            fontSize="large"
            className="footer-icon"
          ></PlayCircleOutline>
          <SkipNext className="footer-icon"></SkipNext>
          <Repeat className="footer-icon"></Repeat>
        </div>
        <Slider
          aria-label="Volume"
          size="small"
          defaultValue={0}
          style={{ marginLeft: "5px" }}
          sx={{
            color: "white",
            "& .MuiSlider-thumb": {
              display: "none",
            },
            ":hover": {
              color: "#1db954",
              "& .MuiSlider-thumb": {
                display: "unset",
              },
            },
          }}
        />
      </div>
      <div className="basis-3/10 flex items-center justify-between w-[250px]">
        <Headset className="footer-icon"></Headset>
        <QueueMusic className="footer-icon"></QueueMusic>
        <DevicesOther className="footer-icon"></DevicesOther>
        <div>
          <Stack
            spacing={2}
            direction="row"
            alignItems="center"
            width="150px"
            sx={{
              "& .MuiSlider-thumb": {
                display: "none",
              },
              ":hover": {
                "& .MuiSlider-root": {
                  color: "#1db954",
                },
                "& .MuiSlider-thumb": {
                  display: "unset",
                  color: "#1db954",
                },
              },
            }}
          >
            <VolumeUp className="footer-icon" />
            <Slider
              aria-label="Volume"
              size="small"
              defaultValue={90}
              style={{
                marginLeft: "5px",
              }}
              sx={{
                color: "white",
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Footer;
