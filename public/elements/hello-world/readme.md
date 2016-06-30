# hello-world polymer custom element
This is a hello-world that is intended to confirm that the basic setup is working fine.

This is a simple basic Polymer web component that I used to verify that the basic setup OK.

## Setup Polymer

You need Polymer base files to use this component.

1. Install Bower if you don't have : `sudo npm install -g bower`.
2. Download Polymer using bower: `bower install Polymer/polymer`.

## Install this package

`npm install --save hello-world-mytest`

## Dependency Locations

_Verify your directory structure. (if necessary)_ 
```
|
|-- hello-world
|   |-hello-world.html (this file)
|-- bower_components
    |-- polymer
    |   |-- polymer.html
    |-- webcomponentsjs
        |-- webcomponents-lite.min.js
```

# Usage

```html
<head>
    ...
    <!-- import webcomponents-lite.min.js -->
    <script src="/path/to/bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ...
    <!-- import the file -->
    <link rel="import" href="/path/to/hello-world.html">
    ...
</head>

<hello-world attribute1="value1" attribute2="value2"></hello-world>

```


## Attributes

By default it will output `hello-world`.

Attribute     | Type   | Description                               
------------- | ------ | ------------------------------------------
`name`        | String | `name = "Vaju"` will output `hello Vaju`
`message`     | String | `message = "hi"` will alert you _Hi_

## Example

```html
<head>
    ...
    <!-- import webcomponents-lite.min.js -->
    <script src="/path/to/bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ...
    <!-- import the ./hello-world-mytest/hello-world.html file -->
    <link rel="import" href="/path/to/hello-world-mytest/hello-world.html">
    ...
</head>
<<body>
    ...
    <hello-world></hello-world>
    <hello-world name="Billy"></hello-world>
    ...        
</body>

```
This will output :
> Hello hello-world

> Hello Billy

## Questions ?

Feel free to ping me on Skype at `vajuinside`.

bye..


## Change Log
*1.0.9*
* Added a new attribute: `message`
* Added button.

*1.0.8*
* Anonymous documentation update.

*1.0.7*
* updated documentation.
* styled the element.