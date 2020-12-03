# Flex Webchat Example Plugin

## Overview
This project holds a customised version of the [Flex WebChat UI](https://www.npmjs.com/package/@twilio/flex-webchat-ui) plugin.

When the user selects the chat icon the plugin shows a pre engagement from to collect the users name. Once collected an inital message is auto sent to trigger the studio flow. 

The general idea is the studio flow can then return chat messages with additional `"action"` attributes in order to display custom UI for the user to respond instead of the usual free text box.

This makes it possible to build a dynamic "IVR" studio flow to control the users jounry without having to make additional changes to the deployed plugin.

The currently support `"action"` attribute sets are detailed in the table below. 

Note: all sets must have a property named **action** with the value in the first column. 

If no **action** attribute value is set on the response message then the standard free text box and submit button control will be displayed.

<table>
<thead>
<tr>
<th>action</th><th>usage</th><th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>
<b>CHOICE</b>
</td>
<td>
renders buttons to let the user make a choice. options property contains an object that holds the key/value pairs to render. <br/><br/> Each of the objects keys is the data value sent back as the users choice in the reply message attribute and the value is rendered as the buttons display text and sent in the reply message body.
</td>
<td>

````json
{
    "action": "CHOICE",
    "options": {
        "opt1": "Option One",
        "opt2": "Option Two" 
    }
}
````

</td>
</tr>
<tr>
<td><b>RESET</b></td>
<td>renders a reset button to let the user restart the flow. useful when the flow can answer the users query automatically without needing to connect to an agent. <br/><br/> Can also be used in an error response if something went wrong.</td>
<td>

````json
{
    "action": "RESET"
}
````

</td>
</tr>
</tbody>
</table>
<br/>

## Configuration

Environment variables need to be set in order to build the plugin, these are detailed in the [.env.example](/.env.example) file. The plugin will fail to build if these variables are not set.

|variable|usage|example|
|---|---|---|
|**TWILIO_ACCOUNT_SID**|Account SID of the Twilio account that holds the flex instance to chat with|`AC...`|
|**TWILIO_WEB_CHAT_FLEX_FLOW_SID**|The flex flow SID of the chat flow for your flex instance. This value can be retrived from the Flex/Messaging tab in the Twilio Console|`FO...`|

## Production Build
For a production build, executed via the npm `build` script, the required environment variables can be set system wide or in a `.env.prod` file in the root directory. All environment variables specified in the [.env.example](/.env.example) file **MUST** be set prior to build.

On a successful build a single `.js` file will be generated in the [dist](/dist) directory. This file can be referenced in a script tag to add the customised webchat to your website. Note: a gzipped (ending with `.js.gz`) is also generated if you would like to serve this version instead.

## Local Development
To develop the plugin locally you can use the npm `start` script. Before running this script a `.env.dev` file in the root directory needs to be created and all environment variables specified in the [.env.example](/.env.example) file **MUST** be set, otherwise the script will fail.

On successful run the `start` script will host an example [index.html](/dev-test-site/index.html) blog page with the Plugin added as a script tag on [http://localhost:8080](http://localhost:8080). 

This is hosted using webpacks dev server and the page will auto refresh when changes are made to any of the files under the [/src](/src) directory.

## Example Flow
I have included markup for an [example studio flow](/example-studio-flow/chat-ivr-flow.json) that you can use to test this out.

Note: you will need to change the settings on the `redirect_to_agent` - `send-to-flex` task to point to your own flex instance.

## Whats Next
The following is a list of outstanding items that still need to be implmented.
I have added `TODO` comments in the code for the matching sections that may need to be updated. 

1. ~~bundle size too large. Looks like all node_modules are being included in the bundle. need to sort this out, tree shaking?~~

2. customise theme to match brand. I have imported an example [brand file](/src/branding.ts) from Twilios sample github project. This will need to be customised to match the sites theme you are using the plugin in. for more details: --> [see docs](https://www.twilio.com/docs/flex/developer/webchat/theming)

3. updating other strings to match branding --> [see docs](https://www.twilio.com/docs/flex/developer/webchat/localization-and-templating) for defaults 

4. add action type for form input

5. add/improve styling for custom action types

6. file/image upload is in beta. (I have enabled the feature but will need to check docs for notes on security scanning and what to do with uploaded files --> [see docs](https://www.twilio.com/docs/flex/developer/webchat/enable-attachments))