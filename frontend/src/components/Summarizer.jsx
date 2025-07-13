import LoadingAnimation from "../ui/LoadingAnimation";

const Summarizer = () => {
  const isIframeReady = false;
  return (
    <>
      {isIframeReady ? (
        <iframe width="100%" height="315" src="" title="GeeksforGeeks"></iframe>
      ) : (
        <div
          style={{
            width: "100%",
            height: "315px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f0f0f0",
            color: "#333",
            border: "1px dashed #aaa",
          }}
        >
          <LoadingAnimation />
        </div>
      )}
    </>
  );
};

export default Summarizer;
