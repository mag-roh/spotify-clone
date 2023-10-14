export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //remove the token after everything development is finished, otherwise login process will not work properly
    token: 'BQBtOq2LygDrxKp9t_1jOVzWifJrgx-Xpzx8yDeKbt8vX5UmhbQ5v3M2yMS8_A8rFfQxA6htWvmNlFMw8O54iV9kmixUOzag0DfqqPpP3dA5qr0JXL1WTWjY7tMqYwcV0J7PoBKNgNInHqfiX5D4H8P8OpntfTwTE0W99uqt-GIHipm1dsl0A7_Hhc6C1wAjTrc',//setting default value of token as null
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
        default:
            return state;
    }
}

export default reducer;