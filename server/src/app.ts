import express from "express";
import todoRoutes from "./routes/users";
import responseRoutes from './routes/answers'
import connection from "./db/config";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

//import path module (core module)
import path from 'path'
//connect build of react app with nodejs
app.use(express.static(path.join(__dirname,'../../client/client/build')))

app.use("/users", todoRoutes);
app.use("/responses",responseRoutes)

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

//dealing with page refersh
app.use('*',(
  request: express.Request,
  response: express.Response,
  )=>{
  response.sendFile(path.join(__dirname,'../../client/client/build/index.html'))
})

//handling invalid path by using middleware
app.use(
  (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
    )=>{
  response.send({message:`Path ${request.url} is Invalid`});
})

//Error handling middleware
app.use(
  (
    error: Error,
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
    )=>{
  response.send({message:"Error occured",reason:`${error.message}`})
})


//assigning port number
app.listen(4000, () => {
  console.log("Server started on port 4000");
});