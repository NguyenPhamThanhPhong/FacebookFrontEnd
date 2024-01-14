import Newpost from "./new-post";
import "./post.css";
import Posts from "./posts";
import { Postdata } from "../../data/post-api";

const Mainpost = (props) => {
  const imageuser =""
  return (
    <div className="container-mainpost">
      <div className="containerpost">
        <Newpost image={imageuser}/>
        {Postdata.map((item,index) => (
          <Posts
            key= {item._id.$oid}
            propsPost = {item}
          >
          </Posts>
          
        ))}
      </div>
    </div>
  );
};

export default Mainpost;
