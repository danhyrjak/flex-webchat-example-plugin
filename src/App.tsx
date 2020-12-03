import React from "react";
import FlexWebChat from "@twilio/flex-webchat-ui";
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

                // TODO: update other strings to match branding
                manager.strings.WelcomeMessage = "Welcome to Chat";

                // remove inline start message
                FlexWebChat.MessagingCanvas.defaultProps.predefinedMessage = undefined;

                // send initial message to trigger flow after pre-enagement form is completed
                FlexWebChat.Actions.addListener("afterStartEngagement", (payload) => {
                    let { friendlyName } = payload.formData;
                    if (!friendlyName || !friendlyName.trim()){
                        friendlyName = "Anonymous";
                    }

                    const { channelSid } = manager.store.getState().flex.session;
                    manager.chatClient.getChannelBySid(channelSid)
                        .then(channel => {
                            channel.sendMessage(`${friendlyName} wants to chat!`);
                        });
                });

                // setup custom message input control for "action" replies
                // @ts-ignore
                FlexWebChat.MessagingCanvas.Input.Content.replace(<ActionItemInputControl manager={manager} key="input-child" />, {
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