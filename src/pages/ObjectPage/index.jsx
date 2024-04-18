import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext.jsx";

const ObjectPage = ({}) => {
  const value = useContext(DataContext);
  return (
    <>
      <div>ContextPage</div>
      <p>Name: {value.ad}</p>
      <p>Age: {value.yas}</p>
    </>
  )
}

export default ObjectPage;
