import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app=express();
const port=3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(port ,() => {
    console.log(`Server is running ${port}.`);
})

app.get("/" ,(req,res) =>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.get("/about" ,(req,res) =>{
    res.sendFile(path.join(__dirname,'about.html'));
})

app.get("/contact" ,(req,res) =>{
    res.sendFile(path.join(__dirname,'contact.html'));
})