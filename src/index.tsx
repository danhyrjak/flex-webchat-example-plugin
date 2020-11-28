import * as React from "react";
import { render } from "react-dom";
import App from "./App";

console.log("registering for dom loaded");
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  console.log("generating App");
  //TODO: append theme into the config object below. see default sample for idea.
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
});