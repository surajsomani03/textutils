import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alerts from './components/Alerts';
import{
  BrowserRouter as Router,
  Route,
  // Switch, The switch method in exchanged with the Routes
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null) // enable dark mode or not

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const removeBodyClasses=()=>{
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-warning')
  // }
  const toggleMode = (cls)=>{
    // removeBodyClasses();
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enables","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>  
    <Router>
<Navbar title="TextUtils" mode = {mode} toggleMode={toggleMode}/>
<Alerts alert={alert} />
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About mode = {mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Try TextUtils- Word counter, Character counter, Remove extra spaces" mode = {mode} />}>
          </Route>
</Routes>
</div>
  </Router>
    </>
  );
}

export default App;
