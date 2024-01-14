import Newpost from "./new-post";
import "./post.css";
import Posts from "./posts";
import { Postdata } from "../../data/post-api";
import { useGlobalContext } from '../../data-store/Context.js'

const Mainpost = (props) => {
  const imageuser =""

  const [globalState, dispatchGlobalState] = useGlobalContext();  
  const { posts } = globalState;
  const {homePosts} = globalState;

  console.log("posts",posts);
  console.log("homePosts",homePosts);

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
