# Pixabay Image Search App

  This app uses Pixabay's API to retrieve photos based off of a query through a TestInput and Button, displayed in a FlatList component dynamically rendered from the results that contains linked images to details about the image and author.

## Table Of Contents

* [Getting Started](#Getting-Started)
* [Installing](#Installing)
* [Use](#Use)
* [Version History](#Version-History)
* [Authors](#Authors)

<!-- toc -->

## Getting-Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

Also be sure, once you have cloned the repo, that you add a config.js file to the ./app/ folder. It should look as follows:

./app/:
```
const config = {
  // this is the api key for pixabay
  apiKey: '12556473-f3c29a14fbbca65ba699167e8',
};

export default config;
```

## Installing

Assuming you have [react-native, xcode, and android studio installed with appropriate settings and the react-native CLI](https://facebook.github.io/react-native/docs/getting-started), and have added the config.js file to the ./app/ directory as stated above, follow the following commands in the root directory in a terminal:

```
npm install
npm run start
```

Open a new terminal in the root directory and now run the following commands:
```
npm run ios (or react-native run-ios)
npm run android (or react-native run-android)
```

If any issues arise or if you prefer can always run the .xproj file in xCode from the ios folder for iOS and for android you can run the project through the ./android folder in the android studio application.

## Use

Follow the prompts on the screen. An overview would be:
* Landing page: 
  * Search Screen: input text and then click submit to be navigated to results
    * Results Screen: scroll to see dynamically rendering items up to 200 entries and click on any image to 
    be navigated to the details screen for that image.
      * Details: Once done click the results button to navigate back to results or swipe/click a tab to navigate
      to a different screen/tab.

## Version-History
* 1.0
    * Final react-native build for challenge.
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/e2954424efd312d781471f8e78122d54e0b0f6e6)
* 0.9
    * Testing Hooks + References to no avail
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/922f37998b64b6e9eb905b185e63ce1415e2fccc)
* 0.8
    * Cleanup
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/421da4415e7a5c640d0d113b2e8d286298c6e260)
* 0.7
    * Details
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/af6afdc345a4367e5f9068e16ebbd08be99caa7c)
* 0.6
    * Update State
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/92914b19e8aa1e876a98039e9c3ccfc6ae44fc95)
* 0.5
    * Context and hooks
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/fbdfa43b632bde9b10d98e302a5695ef1918a3ee)
* 0.4
    * Navigation 3.0
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/f64fedd3889762245420b99aff62ef2b211e7612)
* 0.3
    * Navigation
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/fe668597a60bef3024d065497e936a8d91e88515)
* 0.2
    * Barebones UI
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/9a772742e7a7983707a2042d72871b3d137a7bf6)
* 0.1
    * Initial react-native build.
    * See [commit change](https://github.com/jonathan-raitses/Pixabay-Image-Search-App/commit/26f66789f0898a2b60d9c62438f254644eaa0dd8)

## Author

* **Jonathan Raitses** - [Jonathan-Raitses](https://github.com/jonathan-raitses)