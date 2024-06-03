import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from './components/TextForm';
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleModde = () => {
    if(mode !== 'dark'){
      setMode('dark')
      document.body.style.backgroundColor = '#2D3250' ;
      showAlert("Dark mode has been enabled.","success"); 
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.","success");
    }
  }

  const showAlert = (message, type) =>{
    setAlert({
        msg : message,
        type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  // const router = createBrowserRouter = ([
  //   {
  //     path: "/",
  //     element: <TextForm heading="Please provide the text to analyze.." mode = {mode} showAlert={showAlert}/>
  //   },
  //   {
  //     path: "/about",
  //     element: <About mode={mode}/>
  //   }

  // ])



  return (
    
    <Router>
      <Navbar title="TextUtils" about="About" mode = {mode} toggleMode={toggleModde} showAlert={showAlert}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <Routes>
        <Route path="/" element={<TextForm heading="Please provide the text to analyze.." mode = {mode} showAlert={showAlert}/>}/>
        <Route path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </div>
    </Router>

    // <>
    //   <Navbar title="TextUtils" about="About" mode = {mode} toggleMode={toggleModde} showAlert={showAlert}/>
    //   <Alert alert={alert}/>
    //   <div className="container my-4">
    //     <RouterProvider router={router}/>
    //   </div>
    // </>

  );
}

export default App;


