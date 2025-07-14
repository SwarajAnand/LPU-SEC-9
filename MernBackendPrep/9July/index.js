const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

const storage = multer.diskStorage({ 
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, "Screen" + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use(express.json());

app.post('/upload', upload.single('file'), (req, res) => {
  console.log('File and text data received');
  const file = req.file;
  const textData = req.body.text;

  if (!file || !textData) {
    return res.status(400).send('File and text data are required');
  }

  res.send({
    message: 'File and text uploaded successfully',
    file: file,
    text: textData
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
