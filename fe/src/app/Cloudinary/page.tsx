"use client";
import { UploadStream } from "cloudinary";
import { log } from "console";
import { read } from "fs";
import { useState } from "react";
const Cloudinary = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const handleOnChange = (changeEvent: any) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target?.result);
      setUploadData(undefined);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };
  async function handleOnSubmit(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );
    const formData = new FormData();
    for (const file of fileInput.files) {
      formData.append("file", file);
    }
    formData.append("upload_preset", "my-uploads");
    const data = await fetch(
      "https://api.cloudinary.com/v1_1/dcwgzeo3g/image/upload",
      { method: "POST", body: formData }
    ).then((r) => r.json());
    setImageSrc(data.secure_url);
    setUploadData(data);
    console.log("data", data);
  }

  return (
    <form method="post" onChange={handleOnChange} onSubmit={handleOnSubmit}>
      <p>
        <input type="file" name="file" />
      </p>
      <div>
        <img src={imageSrc} alt="zurag" className="w-screen h-screen" />
      </div>
      {imageSrc && !uploadData && (
        <p>
          <button>Upload files</button>
        </p>
      )}
      {uploadData && (
        <code>
          <pre>{JSON.stringify(uploadData, null, 2)}</pre>
        </code>
      )}
    </form>
  );
};
export default Cloudinary;
