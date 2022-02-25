import React from "react";

const SongRow: React.FC<{
  track: {
    songName: string;
    artistName: string;
    img: string;
    releaseDate: string;
    duration: number;
  };
  albumName: string;
  id: number;
}> = (props) => {
  const { songName, artistName, img, releaseDate, duration } = props.track;
  let durationInSecs = ((duration / 1000) % 60).toFixed(0);
  const durationInMins = (duration / (60 * 1000)).toFixed(0);
  const date = new Date(releaseDate).toDateString().substring(4);

  if (+durationInSecs < 10) {
    durationInSecs = `0${durationInSecs}`;
  }

  return (
    <div className="flex items-center justify-between z-50 py-[10px] px-[30px] text-[14px] text-gray-300 hover:bg-[#fafafa41]">
      <div className="flex items-center">
        <div className="ml-[20px] w-[20px] text-right">{props.id}</div>
        <div className="flex items-center ml-[20px] w-[300px]">
          <img src={img} alt={songName} className="h-[40px] w-[40px]"></img>
          <div className="ml-[10px]">
            <p className="text-white">{songName}</p>
            <p className="text-[12px]">{artistName}</p>
          </div>
        </div>
      </div>
      <div className="w-[100px] ml-[10px] hidden md:block">
        {props.albumName}
      </div>
      <div className="w-[100px] ml-[10px] hidden lg:block">{date}</div>
      <div className="w-[50px] pr-[40px] ml-[10px]">
        {durationInMins}:{durationInSecs}
      </div>
    </div>
  );
};

export default SongRow;
