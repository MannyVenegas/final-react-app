import { fetchAPI } from "../api";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BookingPage from "./BookingPage";

import React from 'react'
import Confirmation from "./Confirmation";

const Body = () => {
  function updateTimes(date){
    let times = fetchAPI(date)
    return times
  }

  function initializeTimes(){
    let date = new Date()
    let times = fetchAPI(date)
    return times
  }

  return (
    <div>
        <BrowserRouter>
         <Routes>
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/" element={<Home />}/>
            <Route path="/reserve" element={<BookingPage updateTimes={updateTimes} initializeTimes={initializeTimes} />}/>
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Body
