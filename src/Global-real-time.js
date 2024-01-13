import React, { useState, useEffect } from 'react';
import { useGlobalContext, setConversations,setMyConnection } from './data-store';

import * as signalR from '@microsoft/signalr';

const GlobalRealTime = () => {
    const [connection, setConnection] = useState(null);

    const [globalState, dispatchGlobalState] = useGlobalContext();



    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://192.168.1.7:7095/chathub') // Replace with your actual hub URL
            .build();

        setConnection(newConnection);
    }, []);



    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then(() => {
                    dispatchGlobalState(setMyConnection(connection));
                })
                .catch((err) => console.error('Error connecting to the hub:', err));

            connection.on('ReceiveMessage', (receiverIds, conversationId, message) => {
                console.log('ReceiveMessage', receiverIds, conversationId, message);
                let conversations = globalState?.conversations;
                let conversation = conversations.find(x => x.id === conversationId);
                if(receiverIds.includes(globalState?.user?.id))
                {
                    if (conversation) {
                        conversation?.messages.push(message);
                        dispatchGlobalState(setConversations(conversations));
                    }
                    else {
                    }
                }
            });

            connection.on('MessageStatus', (conversationId, message) => {
            });

            connection.on('DeleteMessage', ( receiverIds, conversationId, messageId) => {
                let conversations = globalState?.conversations;
                let conversation = conversations.find(x => x.id === conversationId);
                if(receiverIds.includes(globalState?.user?.id))
                {
                    if (conversation) {
                        let index = conversation?.messages.findIndex(x => x.id === messageId);
                        if (index !== -1) {
                            conversation?.messages.splice(index, 1);
                            dispatchGlobalState(setConversations(conversations));
                        }
                    }
                }
            });

            connection.onclose((e) => {
                console.error('Connection closed:', e);
            });

            return () => {
                connection.off('ReceiveMessage');
                connection.off('PublicChannel');
            };
        }
    }, [connection]);



    return (
        null
    );
};

export default GlobalRealTime;
