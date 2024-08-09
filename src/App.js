import React, { useState } from "react";
import "./App.css";

function App() {
  const [targetFile, settargetFile] = useState("");
  const [formData, setformData] = useState("");
  const [fileInfo, setFileInfo] = useState("");

  const handleImageChange = (e) => {
    console.log(e.target.files[0]);
    settargetFile(e.target.files[0].name);
    // Don't update state if the user clicks "cancel"
    if (!e.target.files[0]) {
      return;
    }

    // Format File for fetch request
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log(formData);
    console.log(...formData);
    setFileInfo(JSON.stringify(...formData));
  };

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="photo">File Upload *</label>
        <input
          type="file"
          name="photo"
          id="photo"
          onChange={handleImageChange}
          accept="image/png, image/jpeg"
        />

        <div>{targetFile}</div>
        <div>{formData}</div>
        <div>{fileInfo}</div>
      </header>
    </div>
  );
}

export default App;
