import React, { useState, useEffect } from 'react';
import { useGlobalContext, setConversations } from './data-store';

import * as signalR from '@microsoft/signalr';

const ChatComponent = () => {
    const [connection, setConnection] = useState(null);

    const [globalState, dispatchGlobalState] = useGlobalContext();



    useEffect(() => {
        const newConnection = new signalR.HubConnectionBuilder()
            .withUrl('https://localhost:7095/chathub') // Replace with your actual hub URL
            .build();

        setConnection(newConnection);
    }, []);



    useEffect(() => {
        if (connection) {
            connection
                .start()
                .then(() => console.log('Connected to the hub'))
                .catch((err) => console.error('Error connecting to the hub:', err));

            connection.on('ReceiveMessage', (receiverIds, conversationId, message) => {
                let conversations = globalState?.conversations;
                let conversation = conversations.find(x => x.id === conversationId);
                if (receiverIds.includes(globalState?.user?.id)) {
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
                if (receiverIds.includes(globalState?.user?.id)) {
                    if (conversation) {
                        if (conversation && conversation.messages) {
                            conversation.messages = conversation.messages.filter(x => x.id !== messageId);
                          }
                          
                        dispatchGlobalState(setConversations(conversations));
                    }
                    else {
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

export default ChatComponent;
