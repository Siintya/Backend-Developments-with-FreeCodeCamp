## Install & Setup Mongoose
1. Install mongodb with npm
    ```shell
    $ npm install mongodb
    ```
    check in file package.json
2. Define mongodb uri in `.env` file
   ```shell
   MONGO_URI="mongodb+srv://<username>:<password>@cluster0.gb5bnce.mongodb.net/<dbname>?retryWrites=true&w=majority"
   ```
3. Require Moongose in `myApp.js` file
    ```shell
    // check 
    console.info(process.env);

    let mongoose = require('mongoose');
    ```
4. Call the `connect()` method on mongoose
    ```shell
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    ```