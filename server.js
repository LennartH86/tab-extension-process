const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Heroku will serve the static files from the root of the "Annotation" folder
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});