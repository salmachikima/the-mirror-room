const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/quotes', (req, res) => {
  const quotes = [
    "You don’t have to become fire to be seen. Sometimes, the candle is enough.",
    "You were never too much. They were simply too little for your depth.",
    "Softness was never your weakness. It was your hidden shield.",
    "Healing doesn’t mean forgetting. It means remembering without pain.",
    "Even the moon shows her scars. That’s how she glows.",
    "The mirror didn’t lie — but the one who held it did.",
    "You’re not here to be understood by everyone. You’re here to remember yourself.",
    "Every time you broke, you became more whole. That’s the irony of light."
  ];

  res.json(quotes);
});
app.get('/', (req, res) => {
  res.send('✨ Welcome to Lumière’s Hidden Quote API ✨');
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
