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
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${data}`,
  });
  console.log(completion.data.choices[0].text);
});
