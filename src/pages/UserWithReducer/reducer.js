import {v4 as genId} from "uuid"
export const usersReducer = (state, action) => {
    switch (action.type) {
      case "get_users":
        return action.payload;
      case "remove_user":
        return state.filter((user) => user.id !== action.payload);
      case "edit_user":
        return state.map((user) => {
          if (user.id === action.payload) {
            const newUsername = prompt("enter new user name:", user.username);
            return { ...user, username: newUsername };
          }
          return user;
        });
        case "add_user":
          const username = prompt('enter new username:')
          const id = genId()
          return state.concat({id, username})
          case 'remove_first' :
            return state.slice(1)
      default:
        throw new Error("YALNIS!!!!!!!");
    }
  };