import { useGlobalContext, initialState } from './data-store/Context'

import {
    setUser,
    setPosts,
    appendPosts,
    removePost,
    appendConversations,
    removeConversation,
    setConversations,
    removePeople,
    setPeople,
    appendPeople,
    setHomePosts
} from './data-store/Actions'

import { userApi, loginApi, postApi, commentApi, messageApi, conversationApi } from './data/index'
import { pathNames } from './Routes/routes';

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function DataOnlyComponent() {
    const navigate = useNavigate();
    const [globalState, dispatchGlobalState] = useGlobalContext();
    let urlList = [];
    for (let [key, value] of Object.entries(pathNames)) {
        urlList.push(value);
    }
    const location = useLocation();

    const login = async (email, password) => {
        try {
            const user = await loginApi.loginUser(email, password);
            if (user) {
                dispatchGlobalState(setUser(user));
                navigate('/');
            }
        }
        catch (error) {
            console.log("error")
        }
    }

    const logout = () => {
        dispatchGlobalState(setUser(null));
        localStorage.removeItem('token')
        navigate(pathNames.login);
    }

    useEffect(() => {
        if (!globalState.user) {
            navigate('/login');
        }
    }, [globalState.user])

    const fetchPosts = async (ids) => {
        try {
            const response = await postApi.postGetFromIds(ids);
            if (!response?.isError) {
                dispatchGlobalState(setPosts(response.data.data));
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const fetchConversations = async (ids) => {
        try {
            const response = await conversationApi.conversationGetFromIds(ids,0);
            if (!response?.isError) {
                dispatchGlobalState(setConversations(response.data?.data));
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const fetchPeople = async (ids) => {
        try {
            const response = await userApi.getFromIds(ids);
            if (!response?.isError) {
                dispatchGlobalState(setPeople(response.data?.data));
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const fetchHomePosts = (ids) =>{
        postApi.postGetFromIds(ids).then(response => {
            if (!response?.isError) {
                dispatchGlobalState(setHomePosts(response.data?.data));
            }
        }).catch(error => {
            console.log(error)
        });
    }



    const fetchDatas = (user) => {
        const peopleIds = [...user?.friendIds, ...user?.friendRequestIds, ...user?.friendWaitIds];
        Promise.all([
            fetchPosts(user?.postIds),
            fetchConversations(user?.conversationIds),
            fetchPeople(peopleIds)
        ])
    }


    function handleAutoLogin() {
        let currentPath = location.pathname;
        const token = localStorage.getItem('token');
        if (token) {
            loginApi.loginAuto()
                .then(response => {
                    if (!response?.isError) {
                        dispatchGlobalState(setUser(response?.data?.data));
                        if (currentPath === pathNames.login || currentPath === pathNames.register || currentPath === pathNames.recoverpass || currentPath === pathNames.resetpass) {
                            navigate('/');
                            return true;
                        }
                        else if (urlList.some) {
                            navigate(currentPath);
                            return true;
                        }
                    }
                    else {
                        console.log(response)
                        navigate('/login');
                    }
                }).catch(error => {
                    console.log(error)
                    navigate('/login');
                })
        }
        return false;
    }

    useEffect(() => {
        handleAutoLogin()
    }, [])

    useEffect(() => {
        if (globalState.user?.id!==undefined && globalState.user?.id!==null) {
            fetchDatas(globalState.user);
        }
    }, [globalState.user])

    useEffect(() => {
        if (globalState.people && globalState.people.length > 0) {
            let myQueryIds = []
            for(let person of globalState.people){
                let personPostIds = person?.postIds;
                if(personPostIds && personPostIds.length>0){
                    myQueryIds = [...myQueryIds, ...personPostIds];
                }
            }
            fetchHomePosts(myQueryIds);
        }
    }, [globalState.people])


    return null;
}

export default DataOnlyComponent;