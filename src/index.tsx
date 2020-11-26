import * as React from "react";
import { render } from "react-dom";
import App from "./App";

console.log("registering for dom loaded");
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  console.log("generating App");
  const app = <App config={{
    accountSid: process.env.TWILIO_ACCOUNT_SID,
    flexFlowSid: process.env.TWILIO_WEB_CHAT_FLEX_FLOW_SID
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