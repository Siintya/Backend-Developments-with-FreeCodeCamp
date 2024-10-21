## Install & Setup Mongoose
1. Install mongodb with npm
    ```shell
    $ npm install mongodb
    ```
    check in file package.json
2. Define mongodb uri in `.env` file
   ```js
   MONGO_URI="mongodb+srv://<username>:<password>@cluster0.gb5bnce.mongodb.net/<dbname>?retryWrites=true&w=majority"
   ```
3. Require Moongose in `myApp.js` file
    ```js
    let mongoose = require('mongoose');
    ```
4. Call the `connect()` method on mongoose
    ```js
    // check 
    console.info(process.env);
    
    mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
    ```
