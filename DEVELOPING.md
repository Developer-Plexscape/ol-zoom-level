# Development

To get started locally, follow these instructions:

1. If you haven't done it already, [make a fork of this repo](https://github.com/Developer-Plexscape/ol-zoom-level/fork).
2. Clone to your local computer using `git`.
3. Make sure that you have Node 10 or later installed. See instructions [here](https://nodejs.org/en/download/).
4. Run `npm install` to install all the dependencies.

## Usage

Run `npm start` to start the application. You will then be able to access it at http://localhost:4200

## Run tests

```sh
ng test
```

To test the application in a Linux environment, follow the steps below:

1. Download Google Chrome using the `wget` command: `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
2. Install Google Chrome using the `dpkg` command: `sudo dpkg -i google-chrome-stable_current_amd64.deb`
3. Run `ng test` and ignore any errors or warnings displayed in the console window.
4. The last line in the console window should read `No captured browser, open http://localhost:9876/`. Clicking on the link will open Karma test runner in your local Windows machine.
5. Click on the **DEBUG** button of the page to start running the tests.
