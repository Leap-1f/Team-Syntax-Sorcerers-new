"use client";
import { useState } from "react";
import axios from "axios";

const Page = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData: any = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "first-test");
    console.log(file);
    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dcwgzeo3g/image/upload",
        formData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form method="post" onChange={handleFileChange} onSubmit={handleSubmit}>
      <p>
        <input type="file" name="file" />
      </p>
      <div>
        <img src={filename} alt="zurag" className="w-screen h-screen" />
      </div>
      <p>
        <button type="submit">a</button>
      </p>
    </form>
  );
};
export default Page;
