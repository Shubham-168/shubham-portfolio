import './App.css'

import React from "react";
import Portfolio from "./pages/Portfolio";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <Portfolio />
  </>
);
}

export default App;
