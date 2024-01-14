import {
    SET_USER,
    SET_CONNECTION,
    SET_POSTS,
    SET_HOME_POST,
    APPEND_POSTS,
    REMOVE_POST,
    SET_CONVERSATIONS,
    APPEND_CONVERSATIONS,
    REMOVE_CONVERSATION,
    SET_PEOPLE,
    APPEND_PEOPLE,
    REMOVE_PEOPLE,
    SET_LOGIN,
    SET_LOGOUT,
  } from "./Constants";
  
  const setUser = (payload) => ({
    type: SET_USER,
    payload,
  });

  const setMyConnection = (payload) => ({
    type: SET_CONNECTION,
    payload,
  });
  
  const setPosts = (payload) => ({
    type: SET_POSTS,
    payload,
  });
  const setHomePosts = (payload) => ({
    type: SET_HOME_POST,
    payload,
  });
  
  const appendPosts = (payload) => ({
    type: APPEND_POSTS,
    payload,
  });
  
  const removePost = (payload) => ({
    type: REMOVE_POST,
    payload,
  });
  
  const setConversations = (payload) => ({
    type: SET_CONVERSATIONS,
    payload,
  });
  
  const appendConversations = (payload) => ({
    type: APPEND_CONVERSATIONS,
    payload,
  });
  
  const removeConversation = (payload) => ({
    type: REMOVE_CONVERSATION,
    payload,
  });
  
  const setPeople = (payload) => ({
    type: SET_PEOPLE,
    payload,
  });
  
  const appendPeople = (payload) => ({
    type: APPEND_PEOPLE,
    payload,
  });
  
  const removePeople = (payload) => ({
    type: REMOVE_PEOPLE,
    payload,
  });
  
  const setLogin = (payload) => ({
    type: SET_LOGIN,
    payload,
  });
  
  const setLogout = (payload) => ({
    type: SET_LOGOUT,
    payload,
  });
  
  export {
    setUser,
    setMyConnection,
    setPosts,
    setHomePosts,
    appendPosts,
    removePost,
    setConversations,
    appendConversations,
    removeConversation,
    setPeople,
    appendPeople,
    removePeople,
    setLogin,
    setLogout,
  };
  