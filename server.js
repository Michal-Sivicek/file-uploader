// file: server.js
const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post("/server/upload", upload.single("file"), (req, res) => {
  // Check if the file was successfully uploaded
  if (req.file) {
    // Return success message and file URL
    res.json({
      success: true,
      fileUrl: `./uploads/${req.file.filename}`
    });
  } else {
    // Return error message
    res.json({ success: false });
  }
});

app.listen(3000, "localhost", () => {
    console.log("Server running on http://localhost:3000");
  });
  
