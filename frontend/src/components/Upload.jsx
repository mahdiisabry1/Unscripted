/* eslint-disable react/prop-types */
import { IKContext, IKUpload } from "imagekitio-react";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import LoadingAnimation from "../ui/LoadingAnimation";

const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  const ref = useRef(null);
  const [isUploading, setIsUploading] = useState(false);

  const onError = (err) => {
    console.log(err);
    toast.error("Image upload failed");
    setIsUploading(false);
  };

  const onSuccess = (res) => {
    console.log(res);
    toast.success("Image uploaded");
    setIsUploading(false);
    setData(res);
  };

  const onUploadProgress = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    setProgress(percentage);
    if (percentage < 100) {
      setIsUploading(true);
    }
  };
  return (
    <>
      <IKContext
        publicKey={import.meta.env.VITE_IK_PUBLIC_KEY}
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        authenticator={authenticator}
      >
        <IKUpload
          useUniqueFileName
          onError={onError}
          onSuccess={onSuccess}
          onUploadProgress={onUploadProgress}
          className="hidden"
          ref={ref}
          accept={`${type}/*`}
        />
        <div className="w-full flex gap-5" onClick={() => ref.current.click()}>
          {isUploading ? <LoadingAnimation/> : children}
        </div>
      </IKContext>
    </>
  );
};

export default Upload;
