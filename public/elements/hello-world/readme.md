# hello-world polymer custom element
This is a hello-world that is intended to confirm that the basic setup is working fine.

This is a simple basic Polymer web component that I used to verify that the basic setup OK.

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

## Dependency Locations
```
|
|-- hello-world
|   |-hello-world.html (this file)
|-- bower_components
    |-- polymer
    |   |-- polymer.html
    |-- webcomponentsjs
        |-- webcomponents.js
```

## Attributes

By default it will output `hello-world`.

Attribute   | Type   | Description                               
----------- | ------ | ------------------------------------------
name        | String | `name = "Vaju"` will output `hello Vaju`

## Example

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

<hello-world name="Billy"></hello-world>

```
This will output :

> Hello Billy

## Questions ?

Feel free to ping me on skype at `vajuinside`.

bye..


