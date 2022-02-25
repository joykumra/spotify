import { useEffect } from "react";
import Login from "./components/Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateValue } from "./store/context";
import { actionType } from "./store/reducer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token, playlist, album }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      console.log(_token);
      dispatch({
        type: actionType.SET_TOKEN,
        payload: _token,
      });
      spotify.setAccessToken(_token);

      spotify
        .getMe()
        .then((_user) => {
          const userImg = _user.images!.find((img, index) => index === 0)!.url;
          dispatch({
            type: actionType.SET_USER,
            payload: { name: _user.display_name!, img: userImg },
          });
        })
        .catch((err) => alert(err.message));

      spotify
        .getUserPlaylists()
        .then((playlists) => {
          dispatch({
            type: actionType.SET_PLAYLIST,
            payload: playlists.items.map((item) => {
              return item.name;
            }),
          });
        })
        .catch((err) => alert(err.message));

      spotify
        .getPlaylist("4LjXOkAhbB5OmqXgzLQn5d")
        .then((playlist) => {
          console.log(playlist);
          const { owner, name, tracks } = playlist;
          dispatch({
            type: actionType.SET_ALBUM,
            payload: {
              name: name,
              owner: owner.display_name!,
              tracks: {
                total: tracks.total,
                items: tracks.items.map((item) => {
                  return {
                    songName: item.track.name,
                    artistName: "Karan Aujla",
                    img: "https://i.scdn.co/image/ab67616d0000b27348e94049de03ec0de9a71a8d",
                    releaseDate: item.added_at,
                    duration: item.track.duration_ms,
                  };
                }),
              },
              img: playlist.images[0].url,
            },
          });
        })
        .catch((err) => alert(err.message));
    }
  }, [token, user, playlist, album, dispatch]);

  return (
    <div className="font-montserrat">
      {token ? <Player spotify={spotify}></Player> : <Login></Login>}
    </div>
  );
}

export default App;
