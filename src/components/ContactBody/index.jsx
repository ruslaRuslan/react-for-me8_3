import { useState } from "react";
import "./index.css";
const ContactBody = ({}) => {
  const [clicked, setCliced] = useState(false);
  const click = ({}) => {
    setCliced(true);
  };
  return (
    <div className="divInputs">
      <input type="text" placeholder="name" />
      <input type="email" placeholder="email" />
      <input className="inputMessage" type="text" placeholder="message..." />
      <button
        onClick={click}
        style={{ backgroundColor: clicked ? "blue" : "" }}
      >
        send
      </button>
    </div>
  );
};

export default ContactBody;
