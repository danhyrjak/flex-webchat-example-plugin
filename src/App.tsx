import * as React from "react";
import * as FlexWebChat from "@twilio/flex-webchat-ui";
import OptionsMessageListItem from "./OptionsMessageListItem";

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
                FlexWebChat.MessageListItem.Content.replace(<OptionsMessageListItem key="options-message"/>, {
                    if: (e: any) => {
                        console.log("in check");
                        console.log(e.message.source?.state?.attributes?.action);
                        return e.message.source?.state?.attributes?.action  === "CHOICE";
                    }
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