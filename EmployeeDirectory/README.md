Employee Directory
==============

This is the a example Montage application. It is a port from the Employee Directory application
found here http://coenraets.org/directory/

Before working on your app you will need to add montage to it.

If you do not have Montage initializer installed install it with Node.js.

```
sudo npm install -g minit@latest
```

Then install the EmployeeDirectory sample application.

```
git clone git://github.com/renaun/montagejs-examples.git
cd EmployeeDirectory/
npm install .
```

Layout
------

The montage.js application contains the following files and directories:

* `index.html`
* `package.json` – Describes your app and its dependencies
* `README.md` – This readme. Replace the current content with a description of your app
* `ui/` – Directory containing all the UI .reel directories.
* `main.reel` – The main interface component
* `node_modules/` – Directory containing all npm packages needed, including Montage. Any packages here must be included as `dependencies` in `package.json` for the Montage require to find them.
* `assets/` – Assets such as global styles and images for your app, also where twitter bootstrap css are located.
* `img/` – Application images.
* `pics/` – Employee pictures used in the application.

