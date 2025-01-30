// import NavBarComp1 from "./Navigation-Components/NavBar/NavBar1-Components/NavBar1.jsx";

import { useEffect, useState } from "react";
import Modal from "./Feedback component/Modal/Modal";
import Snackbar from "./Feedback component/Snackbar/Snackbar";
import Tooltip from "./Feedback component/Tooltip/Tooltip";
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

      {/* Feedback Component */}
      <div>
        <h1>Feedback Component</h1>

        {/* Modal Demo */}
        <div>
          <h2>Modal Component</h2>
          <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
        </div>

        <Modal
        isOpen={isModalOpen}
        title = 'Example Modal'
        onClose={() => setIsModalOpen(false)}
        footer={<button onClick={() => setIsModalOpen(false)}>Close</button>}
        >
          <p>This is an example modal with customizable content and footer. You can add any content here!</p>
        </Modal>

        {/* Snackbar Demo */}
        <div>
          <h2>Snackbar Component</h2>
          <button onClick={() => setIsModalOpen(true)}>Show Snackbar</button>
        </div>

        <Snackbar 
        isOpen={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        message = 'This is a snackbar message!'
        variant="info"
        action = {{
          label: 'Dismiss',
          onClick: () => setIsSnackbarOpen(false)
        }}
        />

        {/* Tooltip Demo */}
        <div>
          <h2>Tooltip Component</h2>
          <Tooltip content = 'This is a top tooltip' position="top">
            <button>Hover over me</button>
          </Tooltip>
        </div>


        {/* Loaders Demo */}
        <div>
          <h1>Loader Components</h1>

          {/* Determinate Loader */}
          <div>
            <h1>Determinate Loader</h1>
            <div>
              <Determinate variant="linear" progress={progress} />
            </div>
          </div>

          {/* Intermediate Loader */}
          <div>
            <h1>Intermediate Loader</h1>
            <div>
              <Intermediate variant="circular" />
            </div>
          </div>

          {/* Skeleton Loader */}
          <div>
            <h1>Skeleton Loader</h1>
            <Skeleton variant="text" />
            <Skeleton variant="text" width = '60%' />
            <div>
              <Skeleton variant="circular" width={40} height={40} />
              <div>
                <Skeleton variant="text" />
                <Skeleton variant="text" width = '60%' />
              </div>
            </div>
          </div>

          {/* Text Loader */}
          <div>
            <h1>Text loader</h1>
            <TextLoader text="Loading" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
