import express from "express";
import { api } from "./api"

const app = express();
app.use(api);

app.listen(3100, ()=> console.log("server running"));