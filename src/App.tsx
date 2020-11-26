import * as React from "react";
import { Component } from "react";
import {AppConfig, Manager, ContextProvider, RootContainer} from "@twilio/flex-webchat-ui";

interface AppProps {
    config: AppConfig.Config;
}

interface AppState {
    manager?: Manager;
    error?: any;
}

export default class App extends Component<AppProps, AppState> {
    state: AppState = {};

    constructor(props: AppProps) {
        super(props);

        const { config } = props;
        Manager.create(config)
            .then(manager => this.setState({ manager }))
            .catch(error => this.setState({ error }));
    }

    render() {
        const { manager, error } = this.state;
        if (manager) {
            return (
                <ContextProvider manager={manager}>
                    <RootContainer />
                </ContextProvider>
            );
        }

        if (error) {
            console.error("Failed to initialize Flex Web Chat", error);
        }

        return null;
    }
}