# electron-angular-ipc-sample

Simple Electron application with renderer layer in Angular. Showing how you can
integrate Angular with Electron, also showing communication between main process
and renderer process with IPC (sending messages from main process to the
renderer process and from renderer process to the main process) and one of the
methods for data exchange beetwen main process and renderer process.

## Install Electron, Angular-cli and npm packages

Before first run you need to install necessary components and node packages, run
the following commands in your terminal:

```shell
npm install -g electron
npm install -g angular-cli
npm install
```

## Running application

In Unix/Linux run the following commands in you terminal:

```shell
ng run electron
```

In Windows you need to change one line in package.json:

```shell
"build-electron": "ng build --base-href . && cp src/electron/* dist",
```

change it to:

```shell
"build-electron": "ng build --base-href . && copy src\\electron\\* dist",
```

and run the following command in you terminal:

```shell
ng run electron
```
