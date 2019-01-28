export function addUser(user) {
    return {
        type : 'ADD_USER',
        user
    }
}

export function removeUser(id) {
    return {
        type : 'REMOVE_USER',
        id
    }
}

export function showAdd(show) {
    return {
        type : 'SHOW_ADD',
        show
    }
}