# successful-operation polymer custom element
A UI element that can be used to indicate that the operation was successful.

![demo](https://lh3.googleusercontent.com/0zg3RagahMb1JcUyAbwl1sb2aPWOSZ6dUFD_QAcQ53O5OHwmTmik8OZiBCyz01vI0i8qoTgXiOYyYw=w694-h245-no "<successful-operation> element")

Just use
```html
<successful-operation></successful-operation>
```
to show up the above element.

## Setup Polymer and Bootstrap.

You need Polymer base files to use this component.

1. Install Bower if you don't have : `sudo npm install -g bower`.
2. Download Polymer using bower: `bower install Polymer/polymer`.

You also need [Bootstrap](http://getbootstrap.com/getting-started/#download) v3.3.6 or higher to work this component correctly.

## Install this package

`npm install --save successful-operation`

## Dependency Locations

_Verify your directory structure. (if necessary)_ 
```
|
|-- successful-operation
|   |-successful-operation.html (this file)
|-- bower_components
    |-- polymer
    |   |-- polymer.html
    |-- webcomponentsjs
        |-- webcomponents-lite.min.js
```

# Usage

```html
<head>
    <!-- Bootstrap minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    ...
    <!-- import webcomponents-lite.min.js -->
    <script src="/path/to/bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ...
    <!-- import the file -->
    <link rel="import" href="/path/to/successful-operation.html">
    ...
</head>
<body>
    ...
    <successful-operation attribute1="value1" attribute2="value2"></successful-operation>
    ...

    <!-- Bootstrap minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>

```


## Attributes

By default `<successful-operation></successful-operation>` tag will output the default values.

Attributes      | Type        | Default value           | Description                               
--------------- | ----------- | ----------------------- | ------------------------------------------
`header`        | String      | `Hello there`           | `header = "15th June 2016"` will output the string at the top of the element.
`title`         | String      | `Success`               | `title = "Upload Success"` will output the string title of the element.
`info_bold`     | String      | `Be bold`               | `info_bold = "File Uploaded! "` will output the string as a strong info.
`info`          | String      | `Normal letters`        | `info = "hello-world.json"` will output the string as a normal info.
`button_name`   | String      | `Continue`              | `button_name = "okay"` will output the string on the button.
`button_href`   | String (url)| `http://www.google.com` | `button_href = "https://twitter.com"`: when you click on the button, you will be directred to the provided link.

## Example 

```html
<head>
    ...
    <!-- Bootstrap minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    ...
    <!-- import webcomponents-lite.min.js -->
    <script src="/path/to/bower_components/webcomponentsjs/webcomponents-lite.min.js"></script>
    ...
    <!-- import the file -->
    <link rel="import" href="/path/to/successful-operation.html">
    ...
</head>
<body>
    ...
    <!-- default usage -->
    <successful-operation></successful-operation>

    <!-- customized usage (recommended) -->
    <successful-operation header="I am a header" title="I am the Title"></successful-operation>
    ...       

    <!-- Bootstrap minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
 
</body>

```


## Questions ?

Feel free to ping me on Skype at `vajuinside`.

visit my [profile](https://www.npmjs.com/~vaju) to see other elements.

bye..


## Change Log
*1.0.3*
* Anonymous documentation update.

*1.0.2*
* Anonymous documentation update.

*1.0.1*
* Anonymous documentation update.

*1.0.0*
* Initial release.

