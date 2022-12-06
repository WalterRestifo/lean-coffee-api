// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const questions = [
  {
    name: "Alex Neu",
    id: "6389dd4fe1a14daaf8cde036",
    text: "Alex Neu neu neu neu neu neu!",
  },
  {
    name: "jans zwilling",
    id: "6389dda9e1a14daaf8cde03f",
    text: "klar :D",
  },
  {
    name: "Thomas (FAKE!)",
    id: "6389def5e1a14daaf8cde08d",
    text: "Liebe Grüße von der Weihnachtsfeier",
  },
  {
    name: "Jan",
    id: "6389df42e1a14daaf8cde0a0",
    text: "Thomas liegt bestimmt noch im Bett 😀",
  },
  {
    name: "Jan",
    id: "6389df96e1a14daaf8cde0bf",
    text: "Hat jemand schon einen reload hinbekommen? Dass man nicht immer manuell neu laden muss? 😊",
  },
  {
    name: "Ulli / Marvin",
    id: "6389e8543ebf362a4e80e3a6",
    text: "Hallo Leute, ich habs jetzt auch hinbekommen (bzw. Marvin ;) )...Das hast du selbst geschafft, ich hab dir nur die Richtung gezeigt (mit Umweg :D)",
  },
  {
    name: "🦄",
    id: "6389f4a56b56fcd3f9eb12ce",
    text: "const biberCrew = [🐬,🦈,🐙,🐡,🐳,🐠]\n\n\n",
  },
  {
    name: "modified walter",
    id: "638a01ebb1dc16f282ce8be2",
    text: "Ho miritz ??",
  },
  {
    name: "Langer Text zum Anpassen meines Stylings",
    id: "638a06475f1a1e43524c888d",
    text: "Probiers mal mit Max Characters :D :DWeb development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.",
  },
  {
    name: "Jan",
    id: "638a06a15f1a1e43524c88dd",
    text: "Hallo 🙋🏼‍♀️  San Frantschüssko 🙋",
  },
  {
    name: "Bad Dad Jokes",
    id: "638a0890ff6c30c336b62415",
    text: "Was ist klein, raucht und hüpft durch den Wald? {Ein Kaminchen!}\n",
  },
  {
    name: "Boah",
    id: "638a0983ff6c30c336b62540",
    text: "Wie nennt man eine genervte Schlange? Keine Ahnung!\n",
  },
  {
    name: "Ulli",
    id: "638a0abdc6fd46cb97cfd0c6",
    text: "kuck ich ändere was",
  },
  {
    name: "Antje",
    id: "638a0c0fc6fd46cb97cfd271",
    text: "Nice, mein Intervall klappt jetzt 👍",
  },
  {
    name: "Dam!",
    id: "638a0f3a5f1a1e43524c93d3",
    text: "What did the fish say when he swam into a wall?",
  },
  {
    name: "1 h remaining",
    id: "638a11a6ff6c30c336b63751",
    text: "Hoch die 🙌🙌🙌 Wochenende! Juhu!\nUnd schon wieder rum - sad :(\n",
  },
  {
    name: "Nagetier",
    id: "638daa84059e1eb61c61aa88",
    text: "Guten Morgen liebe Biber!",
  },
  {
    name: "Thomas",
    id: "638dbdcb059e1eb61c61c1ed",
    text: "How to build a Next Hallo!",
  },
  {
    name: "Ulli",
    id: "638dd1e5f973a9814235d303",
    text: "hallo und einen wunderschönen Montag!s",
  },
  {
    name: "Thomas",
    id: "638f267a9e2970fa410b2bfd",
    text: "Whazzzzzu´!?",
  },
];

export default function handler(req, res) {
  res.status(200).json(questions);
}
