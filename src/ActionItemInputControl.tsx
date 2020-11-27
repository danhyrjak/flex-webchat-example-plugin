import * as React from "react";
import { MessageInputChildrenProps } from "@twilio/flex-ui-core/src/components/channel/MessageInput/MessageInputImpl"
import { getActionItemFromComponentProps } from "./utils";
import { ActionItem } from "./models";

interface ActionItemInputControlState {
    action?: ActionItem;
}

export default class ActionItemInputControl extends React.PureComponent<MessageInputChildrenProps, ActionItemInputControlState> {
    constructor(props?: Readonly<MessageInputChildrenProps>) {
        if (props) {
            super(props);
            console.log("IN CUSTOM MESSAGE INPUT CONSTRUCTOR");
            console.log(props);
            const action = getActionItemFromComponentProps(props);
            this.state = {
                action
            };
        }
    }

    componentDidMount() {
        // TODO: recheck prop
    }

    componentDidUpdate() {
        // TODO: recheck prop
    }

    render() {
        if (this.state.action) {
            return <div>
                TODO: display a custom input control here, based on action type: {this.state.action?.action}
            </div>;
        }
        return <></>;
    }
}