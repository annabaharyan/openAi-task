import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
import fs from "fs";
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

fs.readFile("./index.txt", "utf8", async (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: `${data}`}],
  });
  console.log(completion.data.choices[0].message);
  
});
