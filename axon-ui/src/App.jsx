// import NavBarComp1 from "./Navigation-Components/NavBar/NavBar1-Components/NavBar1.jsx";

import { useEffect, useState } from "react";
import Modal from "./Feedback component/Modal/Modal";
import Snackbar from "./Feedback component/Snackbar/Snackbar";
import Tooltip from "./Feedback component/Tooltip/Tooltip";
import "./feedback.css"
import { Determinate, Intermediate, Skeleton, TextLoader } from "./Feedback component/Loaders/Loaders";

// import InputField from "./Form-Components/InputField/InputField.jsx";


function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // This useEffect hook handles the pregress of the loader. Every 1ms the loader increases by 10 but it can be changed to any value
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0: prev + 10))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div>
      {/* <NavBarComp1 
          placeholderTxt="Home"
        /> */}
      {/* <InputField label="Label" /> */}

    <div className="app">
      <div className="container">
        <h1 className="title">Feedback Components</h1>
        
        {/* Loaders Section */}
        <section className="section">
          <h2 className="section-title">Loader Components</h2>
          
          <div className="loaders-grid">
            {/* Linear Determinate Loader */}
            <div className="loader-item">
              <h3 className="component-title">Linear Determinate Progress</h3>
              <div className="loader-container">
                <Determinate progress={progress} variant="linear" />
              </div>
            </div>

            {/* Circular Determinate Loader */}
            <div className="loader-item">
              <h3 className="component-title">Circular Determinate Progress</h3>
              <div className="loader-container">
                <Determinate progress={progress} variant="circular" />
              </div>
            </div>

            {/* Linear Intermediate Loader */}
            <div className="loader-item">
              <h3 className="component-title">Linear Indeterminate</h3>
              <div className="loader-container">
                <Intermediate variant="linear" />
              </div>
            </div>

            {/* Circular Intermediate Loader */}
            <div className="loader-item">
              <h3 className="component-title">Circular Indeterminate</h3>
              <div className="loader-container">
                <Intermediate variant="circular" />
              </div>
            </div>
          </div>
        </section>

        {/* Skeleton Loader Section */}
        <section className="section">
          <h2 className="section-title">Skeleton Loaders</h2>
          <div className="skeleton-container">
            <Skeleton variant="text" />
            <Skeleton variant="text" width="60%" />
            <div className="skeleton-profile">
              <Skeleton variant="circle" width={40} height={40} />
              <div className="skeleton-content">
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
              </div>
            </div>
          </div>
        </section>

        {/* Text Loader Section */}
        <section className="section">
          <h2 className="section-title">Text Loader</h2>
          <div className="text-loader-container">
            <TextLoader text="Loading" />
          </div>
        </section>

        {/* Interactive Components Section */}
        <section className="section">
          <h2 className="section-title">Interactive Components</h2>

          <div className="interactive-grid">
            {/* Modal Demo */}
            <div className="interactive-item">
              <h3 className="component-title">Modal Dialog</h3>
              <button className="demo-button" onClick={() => setIsModalOpen(true)}>
                Open Modal
              </button>
              
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Example Modal"
                footer={
                  <button 
                    className="modal-button"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                }
              >
                <p>This is an example modal with customizable content and footer. You can add any content here!</p>
              </Modal>
            </div>

            {/* Tooltip Demo */}
            <div className="interactive-item">
              <h3 className="component-title">Tooltip</h3>
              <div className="tooltip-demo">
                <Tooltip content="This is a helpful tooltip!" position="top">
                  <button className="demo-button">
                    Hover me
                  </button>
                </Tooltip>
              </div>
            </div>

            {/* Snackbar Demo */}
            <div className="interactive-item">
              <h3 className="component-title">Snackbar</h3>
              <button 
                className="demo-button"
                onClick={() => setIsSnackbarOpen(true)}
              >
                Show Snackbar
              </button>
              <Snackbar
                isOpen={isSnackbarOpen}
                message="This is a snackbar notification!"
                variant="default"
                autoHideDuration={1000}
                onClose={() => setIsSnackbarOpen(false)}
                action={{
                  label: "Undo",
                  onClick: () => setIsSnackbarOpen(false)
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  );
}

export default App;
