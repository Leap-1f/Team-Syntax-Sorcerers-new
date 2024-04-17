// import dotenv from "dotenv";
// import AWS from "aws-sdk";
// import fs from "fs";
// export const AWS = () => {
//   AWS.config.update({
//     accessKeyId: ACCESS_KEY_ID,
//     secretAccessKey: SECRET_ACCESS_KEY,
//     region: REGION,
//   });
//   const s3 = new AWS.S3();

//   const uploadParams = {
//     Bucket: "team-syntax",
//     Key: "image.png",
//     Body: fs.createReadStream("public/image.png"),
//   };

//   s3.upload(uploadParams, (err: any, data: any) => {
//     if (err) {
//       console.error("Error uploading file:", err);
//     } else {
//       console.log("File uploaded successfully. Location:", data.Location);
//     }
//   });
//   return (
//     <>
//       <input>Upload</input>
//     </>
//   );
// };
