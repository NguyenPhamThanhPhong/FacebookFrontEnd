import { useGlobalContext, initialState } from './data-store/Context'

import {
    setUser,
    setLogout,
    setPosts,
    appendPosts,
    removePost,
    appendConversations,
    removeConversation,
    setConversations,
    removePeople,
    setPeople,
    appendPeople
} from './data-store/Actions'

import { userApi, loginApi, postApi, commentApi, messageApi, conversationApi } from './data/index'
import { pathNames } from './Routes/routes';

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function useDataHook() {
    const navigate = useNavigate();
    const [globalState, dispatchGlobalState] = useGlobalContext();

    const fetchMessages = async (conversationId, ids, skip) => {
        try {
            const response = await messageApi.messageGetMany(ids, skip)
            if (!response?.isError) {
                if (response.data.data?.length > 0) {
                    let conversations = globalState?.conversations;
                    let conversation = conversations.find(x => x.id === conversationId);
                    if (conversation) {
                        conversation.messages = response.data.data;
                        dispatchGlobalState(setConversations(conversations));
                    }
                }
                return true;
            }
        }
        catch (error) {
            console.log("error")
        }
    }

    const sendMessage = async (receiverIds, conversationId, senderId, content, replyTo, files) => {
        try {
            let message = {
                conversationId,
                senderId,
                content,
                replyTo
            }
            let formData = new FormData();
            for (let [key, value] of Object.entries(message)) {
                formData.append(key, value);
            }
            if (files) {
                for (let file of files) {
                    formData.append("Files", file);
                }
            }
            const response = await messageApi.messageSend(formData);
            if (!response?.isError) {
                if (globalState.realtime?.connection) {
                    let conversations = globalState?.conversations;
                    let conversation = conversations.find(x => x.id === conversationId);
                    if (conversation) {
                        conversation?.messages.push(message);
                        dispatchGlobalState(setConversations(conversations));
                    }
                    let connection = globalState.realtime.connection;
                    let createdMessage = response.data?.data;
                    globalState.realtime.sendMessage(connection, receiverIds, createdMessage?.conversationId, createdMessage)


                }
                return response.data;
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const updatePersonalInfo = async (userId, firstName, lastName, birthday, bio, prevAvatar, blobProfilePicture, blobCoverPhoto) => {
        try {
            let name = lastName + " " + firstName;
            let formData = new FormData();
            formData.append("Name", name);
            formData.append("DateofBirth", birthday);
            formData.append("Biography", bio);
            formData.append("prevAvatar", prevAvatar)
            if (blobProfilePicture) {
                formData.append("AvatarFile", blobProfilePicture);
            }
            // if (blobCoverPhoto) {
            //     formData.append("CoverFile", blobCoverPhoto);
            // }
            const response = await userApi.updatePersonalInfo(userId, formData);
            if (!response?.isError) {
                let currentUser = globalState?.user;
                currentUser.personalInfo = response.data?.data;
                dispatchGlobalState(setUser(currentUser));
                return response.data;
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const sendFriendRequest = async (targetId, option = 1) => {
        try {
            const response = await userApi.userUpdateFriendRequest(targetId, option);
            if (!response?.isError) {
                if (globalState?.user?.friendWaitIds) {
                    let friendWaitIds = globalState?.user?.friendWaitIds;
                    friendWaitIds.push(targetId);
                    let user = {
                        ...globalState?.user,
                        friendWaitIds
                    }
                    dispatchGlobalState(setUser(user));
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const undoFriendRequest = async (targetId, option = 0) => {
        try {
            const response = await userApi.userUpdateFriendRequest(targetId, option);
            if (!response?.isError) {
                if (!response?.isError) {
                    if (globalState?.user?.friendWaitIds) {
                        let friendWaitIds = globalState?.user?.friendWaitIds;
                        friendWaitIds = friendWaitIds.filter(x => x !== targetId);
                        let user = {
                            ...globalState?.user,
                            friendWaitIds
                        }
                        dispatchGlobalState(setUser(user));
                    }
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const acceptFriendRequest = async (targetId, option = 1, name, avatarUrl) => {
        try {
            const conversationCreation = {
                name,
                avatarUrl
            }
            const response = await userApi.userUpdateUnfriendAcceptRequest(targetId, option, conversationCreation);
            if (!response?.isError) {
                if (globalState?.user?.friendWaitIds) {
                    let friendWaitIds = globalState?.user?.friendWaitIds;
                    let friendIds = globalState?.user?.friendIds;
                    friendWaitIds = friendWaitIds.filter(x => x !== targetId);
                    friendIds.push(targetId);
                    let user = {
                        ...globalState?.user,
                        friendWaitIds,
                        friendIds
                    }
                    dispatchGlobalState(setUser(user));
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const rejectFriendRequest = async (targetId) => {
        try {
            const response = await userApi.rejectFriendRequest(targetId);
            if (!response?.isError) {
                if (globalState?.user?.friendRequestIds) {
                    let friendRequestIds = globalState?.user?.friendRequestIds;
                    friendRequestIds = friendRequestIds.filter(x => x !== targetId);
                    let user = {
                        ...globalState?.user,
                        friendRequestIds
                    }
                    dispatchGlobalState(setUser(user));
                }
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const unfriend = async (targetId, option = 0) => {
        try {
            const response = await userApi.userUpdateUnfriendAcceptRequest(targetId, option, {});
            if (!response?.isError) {
                if (globalState?.user?.friendWaitIds) {
                    let friendIds = globalState?.user?.friendIds;
                    friendIds = friendIds.filter(x => x !== targetId);
                    let user = {
                        ...globalState?.user,
                        friendIds
                    }
                    dispatchGlobalState(setUser(user));
                }
                return response.data;
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const likeUnlikePost = async (postId, option = 1, userId, emoji = 1) => {
        let likeRepresentation = {
            emo: emoji,
            userId
        }
        try {
            const response = await postApi.postLikeUnlike(postId, option, likeRepresentation);
            if (!response?.isError) {
                let index = globalState?.posts.findIndex(x => x.id === postId);
                if (index !== null && index !== undefined && index !== -1) {
                    let post = globalState?.posts[index]
                    if (option === 1) {
                        post.likes.push(likeRepresentation);
                    }
                    else {
                        post.likes = post.likes.filter(x => x.userId !== userId);
                    }
                    let myposts = globalState.posts;
                    myposts[index] = post;
                    dispatchGlobalState(setPosts(myposts));
                }
                else {
                    let index = globalState?.homePosts?.find(x => x.id === postId);
                    if (index !== null && index !== undefined && index !== -1) {
                        let post = globalState?.homePosts[index]
                        if (option === 1) {
                            post.likes.push(likeRepresentation);
                        }
                        else {
                            post.likes = post.likes.filter(x => x.userId !== userId);
                        }
                        let myposts = globalState.homePosts;
                        myposts[index] = post;
                        dispatchGlobalState(setPosts(myposts));
                    }
                }
                return response.data;
            }

        }
        catch (error) {
            console.log(error)
        }
    }

    const doComment = async (postId, parentId, userId, content, files = []) => {

        const formData = new FormData();
        formData.append("Content", content);
        formData.append("UserId", userId);
        formData.append("PostId", postId);
        formData.append("ParentId", parentId);
        for (let file of files) {
            formData.append("Files", file);
        }
        try {
            const response = await commentApi.create(formData);
            if (!response?.isError) {
                let index = globalState?.posts.findIndex(x => x.id === postId);
                if (index !== null && index !== undefined && index !== -1) {
                    let post = globalState?.posts[index]
                    post.comments.push(response.data?.data);
                    let myposts = globalState.posts;
                    myposts[index] = post;
                    dispatchGlobalState(setPosts(myposts));
                }
                else {
                    let index = globalState?.homePosts?.find(x => x.id === postId);
                    if (index !== null && index !== undefined && index !== -1) {
                        let post = globalState?.homePosts[index]
                        post.comments.push(response.data?.data);
                        let myposts = globalState.homePosts;
                        myposts[index] = post;
                        dispatchGlobalState(setPosts(myposts));
                    }
                }
                return response.data;
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const deleteComment = async (postId, commentId) => {
        try {
            const response = await commentApi.deleteComment(commentId);
            if (!response?.isError) {
                let index = globalState?.posts.findIndex(x => x.id === postId);
                if (index !== null && index !== undefined && index !== -1) {
                    let post = globalState?.posts[index]
                    post.comments = post.comments.filter(x => x.id !== commentId);
                    let myposts = globalState.posts;
                    myposts[index] = post;
                    dispatchGlobalState(setPosts(myposts));
                }
                else {
                    let index = globalState?.homePosts?.find(x => x.id === postId);
                    if (index !== null && index !== undefined && index !== -1) {
                        let post = globalState?.homePosts[index]
                        post.comments = post.comments.filter(x => x.id !== commentId);
                        let myposts = globalState.homePosts;
                        myposts[index] = post;
                        dispatchGlobalState(setPosts(myposts));
                    }
                }
                return response.data;
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const updateComment = async (postId, commentId, content) => {
        try {
            const response = await commentApi.updateComment(commentId, content);
            if (!response?.isError) {
                let index = globalState?.posts.findIndex(x => x.id === postId);
                if (index !== null && index !== undefined && index !== -1) {
                    let post = globalState?.posts[index]
                    let comment = post.comments.find(x => x.id === commentId);
                    comment.content = content;
                    let myposts = globalState.posts;
                    myposts[index] = post;
                    dispatchGlobalState(setPosts(myposts));
                }
                else {
                    let index = globalState?.homePosts?.find(x => x.id === postId);
                    if (index !== null && index !== undefined && index !== -1) {
                        let post = globalState?.homePosts[index]
                        let comment = post.comments.find(x => x.id === commentId);
                        comment.content = content;
                        let myposts = globalState.homePosts;
                        myposts[index] = post;
                        dispatchGlobalState(setPosts(myposts));
                    }
                }
                return response.data;
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const logout = () => {
        dispatchGlobalState(setLogout({}));
        localStorage.removeItem('token')
        navigate(pathNames.login);
    }

    return {
        fetchMessages, sendMessage, updatePersonalInfo,
        sendFriendRequest, undoFriendRequest, acceptFriendRequest, rejectFriendRequest, unfriend,
        logout, likeUnlikePost,
        doComment, deleteComment, updateComment
    }
}

export { useDataHook }