import * as React from "react";
import { MessageListItem } from "@twilio/flex-webchat-ui";
import {MessageListItemProps} from "@twilio/flex-ui-core/src/components/channel/MessageListItem/MessageListItem.definitions"

export default class OptionsMessageListItem extends MessageListItem {
    constructor(props: Readonly<MessageListItemProps>){
        super(props);
        console.log("IN CONSTRUCTOR");
        console.log(props);
    }
    render(){
    return <div style={{color: "red"}}>{this.props.message.source.body}</div>; //MessageListItem.prototype.render.call(this);
    }
}