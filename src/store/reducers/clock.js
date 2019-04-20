const INITIAL_STATE = {
    date: new Date()
};

export default function clock(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_CLOCK':
            return {
                ...state,
                date: action.date
            };
        default:
            return state;
    }
}