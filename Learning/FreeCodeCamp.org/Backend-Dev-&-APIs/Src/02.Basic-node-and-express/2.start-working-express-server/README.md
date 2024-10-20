# Start a Working Express Server
- One fundamental method is `app.listen(port)`.  It tells your server to listen on a given port, putting it in running state.
- In Express, routes takes the following structure `app.METHOD(PATH, HANDLER)`:
  - `METHOD` is an http method in lowercase.
  - `PATH` is a relative path on the server (it can be a string, or even a regular expression).
  - `HANDLER` is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where req is the request object, and res is the response object. <br> <br>
  For example, the handler
  ```js
      function(req, res) {
          res.send('Response String');
      }
  ```
<br>

🧠  **Challenge**
<br>Use the app.get() method to serve the string "Hello Express" to GET requests matching the / (root) path.
