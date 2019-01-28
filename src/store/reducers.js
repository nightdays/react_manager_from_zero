import combineReducers from 'redux';
const initialState = {
  userList: [
    {
      id: 1, name: "小红"
    },
    {
      id: 2, name: "小方"
    }
  ],
  show : false
};


function userList(state = initialState.userList , action) {
    switch(action) {
        case 'ADD_USER' : return [
            ...state , {
                ...action.user
            }
        ]
    }
}

function show(state = false , action) {
    switch(action) {
        case 'SHOW_USER' : return true
    }
}


const userModule = combineReducers({
    userList
})

export default userModule;

// function userModule( state  , action) {
//     return {
//         userList: userList(state.userLists , action),
//         show : show(state.show , action)
//     }
// }

