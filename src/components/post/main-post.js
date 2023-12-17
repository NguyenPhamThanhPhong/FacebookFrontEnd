import Newpost from "./new-post";
import "./post.css";
import Posts from "./posts";

const Mainpost = () => {
  return (
    <div className="container-mainpost">
      <div className="containerpost">
        <Newpost />
        <Posts />
      </div>
    </div>
  );
};

export default Mainpost;
