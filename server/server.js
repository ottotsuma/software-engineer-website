const express = require('express');
const path = require('path');
const app = express();
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const CacheTime = 86400 // 1 day
// ('Cache-Control', 'public, max-age=2628000') // 31536000 1 year // 2628000 almost a month
//   import fs from "fs";
// import path from "path";
// import OpenAI from "openai";

// const openai = new OpenAI();

// const speechFile = path.resolve("./speech.mp3");

// async function main() {
//   const mp3 = await openai.audio.speech.create({
//     model: "tts-1",
//     voice: "alloy",
//     input: "Today is a wonderful day to build something people love!",
//   });
//   console.log(speechFile);
//   const buffer = Buffer.from(await mp3.arrayBuffer());
//   await fs.promises.writeFile(speechFile, buffer);
// }
// main();
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../build'), {
  maxAge: CacheTime
}));

// is it maxage, maxAge or max-age !?

// Answer API requests.
app.get('/api', function (req, res) {
  res.send('{"message":"Hello from the custom server!"}');
});

// All remaining requests return the React app, so it can handle routing.
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node ${isDev ? 'dev server' : 'cluster worker ' + process.pid}: listening on port ${PORT}`);
});

