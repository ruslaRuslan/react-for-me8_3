import axios from "axios";
import { useEffect, useReducer } from "react";
const url = "https://jsonplaceholder.typicode.com/users/";



const UsersWithReducer = ({}) => {
  const [state, dispatch] = useReducer(usersReducer, []);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      dispatch({ type: "get_users", payload: data });
    });
  }, []);

  return (
    <>
    <button onClick={()=>{
      dispatch({type:'add_user'})
    }}>add user</button>
    
    <button onClick={()=>{
      dispatch({type:'remove_first'})
    }}>remove first user</button>

      {
      
      state.map((user) => {
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
              <button
                onClick={() =>
                  dispatch({ type: "edit_user", payload: user.id })
                }
              >
                edit
              </button>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default UsersWithReducer;
