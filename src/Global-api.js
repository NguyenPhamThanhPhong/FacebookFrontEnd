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
    appendPeople
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
            const response = await postApi.postGetFromIds.ids(ids);
            if (!response?.isError) {
                dispatchGlobalState(setPosts(response.data));
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    const fetchConversations = async (ids) => {
        try {
            const response = await conversationApi.conversationGetFromIds(ids);
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
                dispatchGlobalState(setPeople(response.data));
            }
        }
        catch (error) {
            console.log(error)
        }
    }



    const fetchDatas = async () => {
        Promise.all([
            fetchPosts(globalState.user?.posts),
            fetchConversations(globalState.user?.conversations),
            fetchPeople(globalState.user?.friendIds)
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
                            console.log("currentPath")
                            console.log(currentPath)
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
        if (globalState?.isLoggedIn) {
            fetchDatas();
        }
    }, [])

    return null;
}

export default DataOnlyComponent;