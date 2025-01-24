import express from "express";
import morgan from "morgan";
import pug from "pug";
import path from "path"
import cors from "cors"
const app = express();
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const port = 3000;

//Configuracion Middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({extended:true}))

//Vistas para pug
app.set("views",path.join(__dirname,"pug"));
app.set("view engine", "pug");


app.get('/',(req,res) => {
    res.end(`<h1>Hola Mundo</h1>`);
}).listen(port, () => console.log('listin in port ', port))