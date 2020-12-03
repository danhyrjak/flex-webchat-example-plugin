import React from "react";
import {Actions, Manager} from "@twilio/flex-webchat-ui";
import { MessageInputChildrenProps } from "@twilio/flex-ui-core/src/components/channel/MessageInput/MessageInputImpl"
import { getActionItemFromComponentProps } from "./utils";
import { Button, IconButton } from "@material-ui/core";
import AutorenewIcon from '@material-ui/icons/Autorenew';

interface ActionItemInputControlProps extends MessageInputChildrenProps {
    manager: Manager;
}

export default class ActionItemInputControl extends React.PureComponent<ActionItemInputControlProps> {
    constructor(props: Readonly<ActionItemInputControlProps>) {
        super(props);
        console.log("IN CUSTOM MESSAGE INPUT CONSTRUCTOR");
        console.log(props);
    }

    sendMessage(key: string, value: string){
        this.props.manager.chatClient.getChannelBySid(this.props.channelSid).then(c => c.sendMessage(value, {
            choice: key
        }));
    }

    resetChat(){
        Actions.invokeAction("RestartEngagement");
        console.log("reset");
    }

    render() {
        console.log("in render");
        const item = getActionItemFromComponentProps(this.props);
        console.log(item);
        switch(item?.action){
            case "CHOICE":
                return (
                    <div className="input-options">
                        {Object.entries(item.options).map(([key, value]) => <Button color="primary" key={`${key}-btn`} onClick={() => this.sendMessage(key, value)} value={key}>{value}</Button>)}
                    </div>
                );
            case "RESET":
                return (
                    <div className="input-reset">
                        <IconButton  color="primary" aria-label="reset chat" onClick={() => this.resetChat()}><AutorenewIcon /></IconButton>
                    </div>
                );
            default:
                return <div className="input-unknown">???</div>;
        }
    }
}