import React from 'react';
import {Channel, ChannelHeader, Chat, MessageInput, MessageList, Thread, Window} from 'stream-chat-react';
import {StreamChat} from 'stream-chat';
import {Dialog, Grid} from "@material-ui/core";


const EuChat = (props) => {
    const [userToken, setUserToken]   = React.useState();
    const [chatUser, setChatUser]     = React.useState(false);
    const [channel, setChannel]       = React.useState();
    // const [chatClient, setChatClient] = React.useState();
    const [state, setState]           = React.useState({
        isOpen: true,
    });

    const chatClient = new StreamChat('r3qdy2xxezkj');

    const user = {
        id   : props.chat.userId,
        name : props.chat.userName,
        image: props.chat.image,
    };

    const getUserToken = () => {
        const url           = 'http://35.193.105.188:5002/api/v1/counselling-service/chat/init'
        const requestOption = {
            method : 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body   : `string=${props.chat.userId}`
        }
        fetch(url, requestOption)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setUserToken(res);
            })
            .catch(err => console.log(err))
    }

    React.useEffect(() => {
        getUserToken();
        // chatClient.setUser(user, userToken);
        // setChannel(chatClient.channel("messaging", props.chat.channelId));
    }, [userToken])

    React.useEffect(() => {
        if (userToken && chatClient && userToken !== '' && userToken !== null) {
            chatClient.setUser(user, userToken);
            setChatUser(true);
            console.log("User Set");
            const chatChannel = chatClient.channel("messaging", props.chat.channelId);
            chatChannel.create();
            chatChannel.watch().then(() => {
                setChannel(chatChannel);
            })
            console.log("Channel Initialized");
            console.log(chatClient);
        } else
            console.log("User Not Set");
    }, [userToken, chatUser])

    // React.useEffect(() => {
    //     // if (userToken && userToken !== '' && userToken !== null) {
    //         setChatClient(new StreamChat('r3qdy2xxezkj'));
    //         console.log("Chat Client Initialized");
    //         // console.log(chatClient);
    //     // } else
    //     //     console.log("User Not Set");
    // }, [userToken, chatUser])

    console.log("Chat Init", props);

    const handleClose = () => {
        setState({
            isOpen: false,
        });
        props.onClose(false);
    }


    // chatClient.setUser(user, userToken);

    // const channel = chatClient.channel("messaging", props.chat.channelId);

    return (
        <Dialog open={state.isOpen} onClose={handleClose}>
            <Grid container>
                <Grid item xs={12}>
                    <Chat client={chatClient} theme={'messaging light'}>
                        <Channel channel={channel}>
                            <Window>
                                <ChannelHeader/>
                                <MessageList/>
                                <MessageInput/>
                            </Window>
                            <Thread/>
                        </Channel>
                    </Chat>
                </Grid>
            </Grid>
        </Dialog>
    )
};

export default EuChat;