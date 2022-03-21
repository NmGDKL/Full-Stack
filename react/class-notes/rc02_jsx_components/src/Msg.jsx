import Clock from "./clock";
import "./Msg.css";

function Msg() {
  return (
    <div>
      <h1>Welcome to our React Courses</h1>
      <img
        className="msg-img"
        src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg"
        alt=""
      />
      <Clock/>
    </div>
  );
}

export default Msg;


