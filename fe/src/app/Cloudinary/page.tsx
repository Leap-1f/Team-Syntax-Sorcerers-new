"use client";
import { useState } from "react";
import {Cloudinary} from "@cloudinary/url-gen";


 

const App = () => {
  const cld = new Cloudinary({cloud: {cloudName: 'dcwgzeo3g'}});
};
const Page = () => {
  const [imageSrc, setImageSrc] = useState();
  const [uploadData, setUploadData] = useState();
  const handleOnChange = (changeEvent: any) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent: any) {
      setImageSrc(onLoadEvent.target?.result);
      setUploadData(undefined);
    };
    reader.readAsDataURL(changeEvent.target.files[0]);
  };
  async function handleOnSubmit(event: any) {
    event.preventDefault();
    const form = event.currentTarget;
    const fileInput : any= Array.from(form.elements).find(
      ({ name }: any) => name === "file"
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
  const sendImg =()=>{
  
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
export default Page;