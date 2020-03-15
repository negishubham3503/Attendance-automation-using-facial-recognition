import React, {useState} from 'react';
import Webcam from "react-webcam";
import './App.css';

function App() {
  const [image, setImage] = useState("");
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  const webcamRef = React.useRef(null);
 
  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    },
    [webcamRef]
  );
  return (
    <div className="App">
      <h1>Call your Attendance</h1>
      <img src={image} />
      <img src="../public/logo.png" alt="logo"></img>
      <h3>Tap to snap your picture</h3>
      <Webcam
        audio={false}
        height={360}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        videoConstraints={videoConstraints}
      /><br />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
}

export default App;
