const defaultState = {
    songsCount: 1,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
}