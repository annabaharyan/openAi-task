import * as dotenv from "dotenv";
dotenv.config();
import { ChatGPTAPI } from "chatgpt";
import fs from "fs";
fs.readFile("./index.txt", "utf8", async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const res = await typeGPTAnswer(data);
  console.log(res);
});

async function typeGPTAnswer(text) {
  const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const res = await api.sendMessage(text);
  return res.detail.choices[0].message.content;
}
