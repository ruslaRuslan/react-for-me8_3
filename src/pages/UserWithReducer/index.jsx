import axios from "axios";
import { useEffect, useReducer } from "react";

const url = "https://jsonplaceholder.typicode.com/users/";

const usersReducer = (state, action) => {
  switch (action.type) {
    case "get_users":
      return action.payload;
    case "remove_user":
      return state.filter((user) => user.id !== action.payload);
      default:
        throw new Error('YALNIS!!!!!!!')
  }
};

const UsersWithReducer = ({}) => {
  const [state, dispatch] = useReducer(usersReducer, []);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({ type: "get_users", payload: data });
    });
  }, []);

  return (
    <>
      {state.map((user) => {
        return (
          <div key={user.id}>
            <p>
              {user.username}{" "}
              <button
                onClick={() =>
                  dispatch({ type: "remove_user", payload: user.id })
                }
              >
                х
              </button>{" "}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default UsersWithReducer;
