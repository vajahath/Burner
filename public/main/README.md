# Interland Official Website
`version : 1.0`

> This document describes the basics steps to use this website. As well as build information.

**Devaloped by      :** [Vajahath Ahmed](https://twitter.com/vajahath7) and [Ajmal Nazeer](https://twitter.com/ajmal).
**First Release     :** August 31st 2016.
**Build             :** August 31st 2016.

---

#### Important
Opening the files directly with browser may cause some functions not to work. Instead, you should open these file via a server.

## PHP server
#### Instructions to use with WAMP server.

* Install WAMP/XAMPP on your machine.
* Place the folder.
    - **if WAMP :** Place the given `interland` folder inside  `C:\wamp\www\`.
    - **if XAMPP :** Place the given `interland` folder inside  `C:\xampp\htdocs\`.
* Run the server.
* Navigate to `http://127.0.0.1/interland/` with your browser.

## Node.js server
#### Instructions to use with Node.js server.

* Install and generate Express.js.
* Place the `interland` folder in the `puplic` directory.
* `npm start` in your terminal.
* Navigate to `http://127.0.0.1:<PORT>/interland/` with your browser.
    - default `PORT` is `3000`.

> Note: All the images used inside the website are well optimized and compressed. If you change/replace them with other images, do optimize and compress it with the gulp imagemin.
