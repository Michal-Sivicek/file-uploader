function uploadFile() {
    // Get the selected file from the input
    const file = document.getElementById("fileInput").files[0];
  
    // Create a new FormData object to send the file
    const formData = new FormData();
    formData.append("file", file);
  
    // Send the file to the server using FETCH
    fetch("http://localhost:3000/server/upload", {
    method: "POST",
    body: formData
  })

    .then(response => response.json())
    .then(data => {
      // Check if the upload was successful
      if (data.success) {
        console.log("File uploaded successfully");
        console.log("File URL: ", data.fileUrl);
      } else {
        console.log("File upload failed");
      }
    })
    .catch(error => {
      console.log("Error uploading file: ", error);
    });
  }
  