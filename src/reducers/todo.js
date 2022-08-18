const initialState = [];

const todo = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.data];
        case "DELETE":
            return state.filter((task) => task.id !== action.id);
        default:
            return state;
    };
};

export default todo;