// pages/api/chat.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const { userInput } = req.body;

    // Make a request to the OpenAI API here
    const openaiResponse = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: userInput,
        max_tokens: 50, // Adjust as needed
      },
      {
        headers: {
          'Authorization': `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`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = openaiResponse.data.choices[0]?.text || 'No response from AI';

    res.json({ response: aiResponse });
  } catch (error) {
    console.error('Error communicating with OpenAI API:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
