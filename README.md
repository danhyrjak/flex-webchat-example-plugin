# Flex Webchat Example Plugin

## Overview
This project holds a customised version of the [Flex WebChat UI](https://www.npmjs.com/package/@twilio/flex-webchat-ui) plugin.

Environment variables need to be set in order to build the plugin, these are detailed in the [.env.example](/.env.example) file. The plugin will fail to build if these variables are not set.

## Production Build
For a production build, executed via the npm `build` script, the required environment variables can be set system wide or in a `.env.prod` file in the root directory. All environment variables specified in the [.env.example](/.env.example) file **MUST** be set prior to build.

On a successful build a single `.js` file will be generated in the [dist](/dist) directory. This file can be referenced in a script tag to add the customised webchat to your website.

## Local Development
To develop the plugin locally you can use the npm `start` script. Before running this script a `.env.dev` file in the root directory needs to be created and all environment variables specified in the [.env.example](/.env.example) file **MUST** be set, otherwise the script will fail.

On successful run the `start` script will host an example [index.html](/dev-test-site/index.html) blog page with the Plugin added as a script tag on [http://localhost:8080](http://localhost:8080). 

This is hosted using webpacks dev server and the page will auto refresh when changes are made to any of the files under the [/src](/src) directory.
