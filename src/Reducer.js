export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove the token after everything development is finished, otherwise login process will not work properly
    token:null //setting default value of token as null
}
//defines the current state and the action to be performed to change the current state
const reducer = (state, action) => {
    console.log(action);//used for debugging purpose
    //Action -> type, [payload/data]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,//keeps the rest of the state unchanged
                user: action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;