const express = require('express');
const router = express.Router();
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post('/resume', async (req, res) => {
  const { jobTitle, jobDescription, resumeText } = req.body;

  const prompt = `
You are an expert career advisor. Given a job title and candidate's work history, generate bullet points for a resume that are tailored to the job description.

Job Title: ${jobTitle}
Job Description: ${jobDescription}
Candidate Experience: ${resumeText}

Generate 5 strong bullet points that highlight relevant skills, accomplishments, and responsibilities using professional tone. Format as Markdown bullets.
`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });
    res.json({ output: response.choices[0].message.content });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).send("AI generation failed");
  }
});

module.exports = router;
