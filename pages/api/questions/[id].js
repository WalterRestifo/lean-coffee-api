// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { questions } from "./index";

export default function handler(req, res) {
  const id = req.query.id;
  const question = questions.find((question) => question.id === id);

  if (question) {
    res.status(200).json(question);
  } else {
    res.status(404).json({ message: "File not found" });
  }
}
