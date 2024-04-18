import { useReducer } from "react";

const reduser = (state, action) => {
  if (action === "add_user") {
    return state.concat(["ali", "idris"]);
  } 
  else if (action === "remove_user") {
    return [];
  }
 
};

const UserWithReducer = ({}) => {
  const [state, dispatch] = useReducer(reduser, ["orxan"]);
  return (
    <>
      <button
        onClick={() => {
          dispatch("add_user");
        }}
      >
        add user
      </button>

      <button
        onClick={() => {
          dispatch("remove_user");
        }}
      >
        remove user
      </button>

      {state.map((ad) => (
        <p key={ad}>{ad}</p>
      ))}
    </>
  );
};

export default UserWithReducer;
