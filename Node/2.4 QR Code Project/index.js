/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from "@inquirer/prompts";

var url=await input(
    {message:"Enter your url:"}
);

import qr from "qr-image";
import fs from "fs";
 
var qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream("qr_image.png"));

fs.writeFile("message.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  