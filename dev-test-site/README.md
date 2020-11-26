# Dev Test Site

## Overview
This directory holds an example site configured to use the development version of the plugin. This is used during local development

## Details

The [index.html](./index.html) file in this directory is a sample blog detail page coppied from [Bootdey](https://www.bootdey.com/snippets/view/blog-detail-page).

A additional script tag has been added to the page to load in the dev copy of the plugin.

Use the npm ``start`` script to host this page on http://localhost:8080 along with the dev build of the plugin. This will run in hot reload mode, so if you make a change to the typescript of the plugin, under the top level [/src](../src) folder, the page will reload so you can see your changes during development.
