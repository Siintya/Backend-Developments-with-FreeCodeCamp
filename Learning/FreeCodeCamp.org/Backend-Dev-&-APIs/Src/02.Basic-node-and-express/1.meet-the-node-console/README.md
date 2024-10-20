# Meet The NodeJS Console

NodeJS is just a JavaScript environment. Like client side JavaScript, you can use the console to display useful debug information. <br>

The console in NodeJS is built-in feature used to display messages, logs, and error in the terminal (Command-line). It's similiar to the console in browser JavaScript, but it wotk in the server environment. 

```js
console.log('Hello, NodeJS!');
```

The server must be restarted after making changes to its files.<br>
You can stop the server from the terminal using **Ctrl + C** and start it using Node directly (node mainEntryFile.js) or using a run script in the package.json file with npm run. <br>
For example, 
```js
"start": "node server.js"
```
The script would be run from the terminal using `npm run start`. To implement server auto restarting on file save Node provides the `--watch` flag you can add to your start script `"start": "node --watch server.js"` or you can install an npm package like nodemon.
<br><br>
🧠 **Challenge** <br>
Modify the myApp.js file to log "Hello World" to the console.
