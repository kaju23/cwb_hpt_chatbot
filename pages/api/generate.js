import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});


const basePromptPrefix =
  "This is a chat related to ISO 27001 compliance. You Only need to answer the questions related to it. You are allowed to put the data as it is.";

const generateAction = async (req, res) => {
  try {
  
    const baseCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: `${basePromptPrefix}${req.body.usrInput}` }],
      model: 'gpt-3.5-turbo',
    });

    console.log(baseCompletion);

    res.status(200).json({ output: baseCompletion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', output: null });
  }
};

export default generateAction;
