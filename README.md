
# Info

I made this app in order to get some practice using ***React***

By creating this app, I learned the very basics of React, including hooks, routing, `useState`, and `useEffect`.

At commit `9ee3f4ede..`, I ran into a problem called '***prop drilling***', which is when you're passing many props from a high-level parent component all the way down to deeply nested children components, and it looked pretty horrible. Not to mention that it was difficult to even read.

This is where I learned about the **React Context API** and **Component Composition**

---
## Note

the `.vscode/settings.json` file will cause VSCode to see any `.js` files as `.jsx` files. This helps with auto-completion / intellisense, but otherwise affects the project in no way.

---

## Available Scripts

In the project directory, you can run:

- ### `npm start`

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.\
    You will also see any lint errors in the console.


- ### `npm run server`

    Runs a simple json-server that allows the `db.json` file contents to be retrieved and modified.

    This will run on http://localhost:5000


- ### `npm run build`

    Builds the app for production to the `build` folder.\
    It correctly bundles React in production mode and optimizes the build for the   best performance.

    The build is minified and the filenames include the hashes.\
    Your app is ready to be deployed!
