import * as React from "react";
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import ActionItemInputControl from "./ActionItemInputControl";
import { MessageInputChildrenProps } from "@twilio/flex-ui-core/src/components/channel/MessageInput/MessageInputImpl"
import { getActionItemFromComponentProps } from "./utils";

interface AppProps {
    config: FlexWebChat.AppConfig.Config;
}

interface AppState {
    manager?: FlexWebChat.Manager;
    error?: any;
}

export default class App extends React.Component<AppProps, AppState> {
    state: AppState = {};

    constructor(props: AppProps) {
        super(props);

        const { config } = props;
        FlexWebChat.Manager.create(config)
            .then(manager => {
                // remove inline message
                FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = undefined;

                // setup custom message input control for action items replies
                // @ts-ignore
                FlexWebChat.MessagingCanvas.Input.Content.replace(<ActionItemInputControl key="input-child" />, {
                    if: (e: MessageInputChildrenProps) => getActionItemFromComponentProps(e) !== undefined
                });
                this.setState({ manager });
            })
            .catch(error => this.setState({ error }));
    }

    render() {
        const { manager, error } = this.state;
        if (manager) {
            return (
                <FlexWebChat.ContextProvider manager={manager}>
                    <FlexWebChat.RootContainer />
                </FlexWebChat.ContextProvider>
            );
        }

        if (error) {
            console.error("Failed to initialize Flex Web Chat", error);
        }

        return null;
    }
}