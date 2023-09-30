import OpenAI from 'openai';
import { NextApiRequest, NextApiResponse } from 'next'

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
  console.log(req.body.messages)

try {
  const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: req.body.messages,
  });
  console.log('API response:', completion);
  res.status(200).json({ result: completion });
} catch (error) {
  console.error('API error:', error);
  res.status(500).json({ error: 'Internal Server Error' });
}

}


 
