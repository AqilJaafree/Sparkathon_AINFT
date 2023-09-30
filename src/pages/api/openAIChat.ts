import OpenAI from 'openai';
import { NextApiRequest, NextApiResponse } from 'next';

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Validate input
    const messages = req.body.messages;
    if (!Array.isArray(messages)) {
      res.status(400).json({ error: 'Invalid input format' });
      return;
    }

    // Convert messages array to prompt string
    const prompt = messages.map(message => `${message.role}: ${message.content}`).join('\n');

    // Call the OpenAI API
    const completion = await openai.completions.create({  // Adjust method name if necessary
      model: 'gpt-3.5-turbo',
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    // Send the response back to the client
    res.status(200).json({ result: completion.choices[0].text.trim() });  // Adjust property names if necessary
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
