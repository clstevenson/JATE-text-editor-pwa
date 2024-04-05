# JATE Just Another Text Editor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
JATE (Just Another Text Editor) is a single-page application text editor that can be installed as a Progressive Web Application (PWA) and can run offline either in the browser or as a stand-alone web app. Syntax highlighting is set for JavaScript, and the text data is persistent across browser sessions.

## Table of Contents
- [Installation](#installation)
- [Use](#use)
- [Questions](#questions)
- [License](#license)

## Installation
The app has been deployed on Render, at the link below. Simply open in a browser to use.

<https://text-editor-pwa-0rgg.onrender.com>

If you are using a browser, such as Chrome or Edge on the desktop, that is capable of installing Progressive Web Apps, an install button will be available as shown in the screenshot below. Once installed the app can be used offline. The install button will not appear if your browser does not have the ability to install PWAs or if the app is already installed on your computer.

You can also download or clone the source code. To use on your local machine you must have node.js installed. In a terminal navigate to the root directory. Install dependencies with the `npm run install.` There are a number of scripts defined in the `package.json` file; if you wish to use the `npm run start:dev` script you will need to run `npm install` in the root directory first to install `concurrently` as a devDependency.

The build files are included in the repo but if you make any changes, run `npm run build` to create new file bundles. To start the app, run `npm start` and open `localhost:3000` in a browser.

## Use
A screenshot of the app (in a browser) is shown below. Simply type into the text editor area; the text will be persistent across sessions.

![application screenshot](assets/JATEscreenshot.png)

## Questions
Reach out if you have questions that are not covered here!

- GitHub username: clstevenson
- email: chrislstevenson@gmail.com

## License
This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
