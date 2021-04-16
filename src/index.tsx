import React from "react";
import { render } from "react-dom";
import App from "./App";
import {brandedColors} from "./branding";

console.log("registering for dom loaded");
const init = () => {
  console.log("DOM fully loaded and parsed");

  console.log("generating App");
  const app = <App config={{
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    flexFlowSid: process.env.TWILIO_WEB_CHAT_FLEX_FLOW_SID,
    startEngagementOnInit: false,
    preEngagementConfig: {
      description: "Welcome to Chat",
      fields: [
        {
          label: "What is your name?",
          type: "InputItem",
          attributes: {
              name: "friendlyName",
              type: "text",
              required: true
          }
        }
      ],
      submitLabel: "Ok Let's Go!"
    },
    fileAttachment: {
      enabled: true
    },
    colorTheme: {
      // TODO: can remove and use standard theme instead if you want
      overrides: brandedColors
    }
  }}></App>;

  console.log("inserting DOM Node");
  // tslint:disable-next-line
  const id = `flex-webchat-${(((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)}`;
  const el = document.createElement("div");
  el.setAttribute("id", id);
  window.document.body.appendChild(el);

  console.log("rendering App");
  render(app, document.getElementById(id));

  console.log("done");
};

init();