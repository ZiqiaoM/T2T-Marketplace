import { openUploadWidget } from "../cloudinary/CldService";
import { Component } from 'react'
import Head from 'next/head'

const ImageUploader = (props) => {
  const uploadImageWidget = () => {
    console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: props.cloud_name,
        uploadPreset: props.upload_preset,
        // tags: ["myname"],
        maxImageWidth: 600,
        sources: ["local", "url", "camera"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          props.onImageUpload(result.info.public_id);
          props.recordUrl(result.info.url);
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <>
    <Head>
         <script
            src="https://widget.cloudinary.com/v2.0/global/all.js"
            type="text/javascript"
          />
    </Head>
    <button className="greenButton" type = "button" onClick={uploadImageWidget}>
      Upload Image
    </button>
</>
  );
};

export default ImageUploader;
