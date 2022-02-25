import { TrackItems } from "./TrackItems";

export type Album = {
  name: string;
  owner: string;
  img: string;
  tracks: {
    total: number;
    items: TrackItems;
  };
};
