export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_HASIL_FETCH':
            return action.payload;
        default:
            return state;
    }
};