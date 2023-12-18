import Newpost from "./new-post";
import "./post.css";
import Posts from "./posts";

const Mainpost = (props) => {
  return (
    <div className="container-mainpost">
      <div className="containerpost">
        <Newpost image={props.image}/>
        <Posts image={props.image} />
      </div>
    </div>
  );
};

export default Mainpost;
