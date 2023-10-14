
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "61c5b9d36a984a57a103911467d0e97b";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-platying",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

//Pulling the access token
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            //it will split the url into substring of size 1 until it finds an '&' character
            //#accessToken=mysupersecretkey&name=rohit&magnetic
            //after first split: #accessToken=mysupersecretkey
            //after second split: #accessToken, mysupersecretkey
            //after decoding: [accessToken: mysupersecretkey]
            let parts = item.split("=");//the splitting will happen before and after an '=' in the url
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;