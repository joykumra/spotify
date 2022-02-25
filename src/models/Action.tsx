import { actionType } from "../store/reducer";
import { Album } from "./Album";

export type Action =
  | {
      type: actionType.SET_USER;
      payload: { name: string; img: string };
    }
  | {
      type: actionType.SET_TOKEN;
      payload: string;
    }
  | {
      type: actionType.SET_PLAYLIST;
      payload: string[];
    }
  | {
      type: actionType.SET_ALBUM;
      payload: Album;
    };
