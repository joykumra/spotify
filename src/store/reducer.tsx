import { Action } from "../models/Action";
import { Context } from "../models/Context";

export const initialState: Context = {
  user: { name: "", img: "" },
  token: "",
  playlist: [],
  album: {
    name: "",
    owner: "",
    img: "",
    tracks: {
      total: 0,
      items: [
        {
          songName: "",
          artistName: "",
          img: "",
          releaseDate: "",
          duration: 0,
        },
      ],
    },
  },
  playing: false,
  item: "",
};

export enum actionType {
  SET_USER = "SET_USER",
  SET_TOKEN = "SET_TOKEN",
  SET_PLAYLIST = "SET_PLAYLIST",
  SET_ALBUM = "SET_ALBUM",
}

export const reducer = (state: Context, action: Action) => {
  if (action.type === actionType.SET_USER) {
    return {
      ...state,
      user: action.payload,
    };
  }
  if (action.type === actionType.SET_TOKEN) {
    return {
      ...state,
      token: action.payload,
    };
  }

  if (action.type === actionType.SET_PLAYLIST) {
    return {
      ...state,
      playlist: action.payload,
    };
  }

  if (action.type === actionType.SET_ALBUM) {
    return {
      ...state,
      album: action.payload,
    };
  }

  return state;
};
