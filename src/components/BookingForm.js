import React from 'react'
import { useState, useReducer } from 'react';
import {useNavigate} from "react-router-dom";
import { submitAPI } from "../api";

const BookingForm = ({updateTimes, initializeTimes }) => {
    const [data, setData] = useState({
        date: "",
        time: "",
        group: 1,
        occasion: "other",
    });

    const [state, dispatch] = useReducer(updateTimes, initializeTimes());
    let navigate = useNavigate();
    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        if ([e.target.name] === "date") {
            dispatch(e.target.value);
        };
    };
    
    function handleSubmit (e) {
        e.prevent.default();
        if(submitAPI(data)){
            navigate("/confirmation")
        }
    }
  return (
      <div className='form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor='date'>Date:</label>
            <input type="date" onChange={handleChange} value={data.date} name="date" required />
            <label htmlFor='time'>Time:</label>
            <select onChange={handleChange} value={data.time} name="time">
                {
                    state.map((time) =>{
                        return <option key={time}>{time}</option>;
                    })};
            </select>
            <label htmlFor='group'>Number of people</label>
            <input type="number" name="size" placeholder="1" min="1" max="10" onChange={handleChange} value={data.group} />
            <label htmlFor="occasion">Occasion</label>
            <select onChange={handleChange} value={data.occasion} name="occasion">
                <option>Bithday</option>
                <option>Proposal</option>
                <option>Anniversary</option>
                <option>other</option>
            </select>
            <input type="submit" value="submit" className="button" aria-label="button" />
        </form>
      </div>

   )
}

export default BookingForm;