const express = require('express');
const multer = require('multer');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/save-audio', upload.single('audio'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = `uploads/${Date.now()}-audio.wav`;

    fs.rename(tempPath, targetPath, err => {
        if (err) return res.sendStatus(500);
        res.sendStatus(200);
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
