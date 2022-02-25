import { Album } from "./Album";

export type Context = {
  user: { name: string; img: string };
  token: string;
  playlist: string[];
  album: Album;
  playing: boolean;
  item: string;
};
