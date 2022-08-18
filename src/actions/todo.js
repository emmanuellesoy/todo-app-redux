const ADD = "ADD";
const DELETE = "DELETE";

export const addTask = (task) => ({
    type: ADD,
    data: {
        id: Math.random(),
        value: task
    },
});

export const deleteTask = (id) => ({
    type: DELETE,
    id,
});