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

function useDataHook() {
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

    const sendMessage = async (receiverIds,conversationId, senderId, content, replyTo, files) => {
        try {
            console.log('hallo')
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
                    console.log(response?.data?.data)
                    let connection = globalState.realtime.connection;
                    let createdMessage = response.data?.data;
                    globalState.realtime.sendMessage(connection, receiverIds, createdMessage?.conversationId, createdMessage)
                    // connection.invoke('SendMessage', ['no'], createdMessage?.conversationId, createdMessage);
                }
                return response.data;
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return { fetchMessages, sendMessage }
}

export { useDataHook }