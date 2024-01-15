import Newpost from "./new-post";
import "./post.css";
import Posts from "./posts";
import { Postdata } from "../../data/post-api";
import { useGlobalContext } from '../../data-store/Context.js'
import { useDataHook } from '../../data-hook'

const Mainpost = (props) => {
  const imageuser =""

  const [globalState, dispatchGlobalState] = useGlobalContext();  
  const { user,posts,homePosts,people } = globalState;

  const {likeUnlikePost} = useDataHook()

  const handleLikeUnlike = async (postId, updateAction) => {
    likeUnlikePost(postId, updateAction,user?.id)
  }

  const combinedPosts = posts || [];




  return (
    <div className="container-mainpost">
      <div className="containerpost">
        <Newpost image={user?.personalInfo?.avatarUrl}/>
        {combinedPosts.map((item,index) => {
          // console.log(item)
          return (
            <Posts
              user={user}
              people={people}
              handleLikeUnlike = {handleLikeUnlike}
              key={index}
              propsPost={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Mainpost;
