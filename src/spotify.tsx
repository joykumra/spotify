// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

// AUTHORIZE WITH SPOTIFY API AFTER LOGIN BUTTON IS CLICKED
export const authEndPoint = "https://accounts.spotify.com/authorize";

// REDIRECT TO HOME PAGE AFTER AUTHORIZATION
const redirectUri = "https://spotify-clone-b652a.web.app/";

const clientId = "d9f5802318c04202a4822509f3b5c0ae";

// USER PERMISSIONS ON OUR WEBISTE
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// ACCESS TOKEN FROM LOCAL HOST REDIRECTED URL AFTER COMPLETING LOGIN
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: { [key: string]: string }, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
