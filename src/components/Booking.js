import React, {useState} from "react";
import { validateEmail } from "../utils";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const booked = [
    new Date(2023, 0, 14),
    new Date(2023, 0, 15),
    new Date(2023, 0, 23),
    new Date(2023, 0, 25),
    new Date(2023, 0, 27),
    new Date(2023, 0, 30),
    new Date(2023, 1, 1),
    new Date(2023, 1, 5),
    new Date(2023, 1,10),
    new Date(2023, 1,14)
]

const Booking = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState("0");

    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(),30),16));

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            setStartDate != "2023-01-01"
        );
    };

    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPeople("0")
        setStartDate(setHours(setMinutes(new Date(),30),16))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You have a table!");
        clearForm();
    };

    return (
        <div id="reserve-header" className="reserve-header">
            <div className="text-center">
                <h1>Reserve a table</h1>
                <p>Please fill the form and we'll be glad to help you with your reservation!</p>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 co col-xs-12">
                            <div className="text-center">
                                <input type="text" value={firstName} className="form-control" placeholder="First name" onChange={(e) => {setFirstName(e.target.value)}}/>
                                <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input type="text" value={lastName} className="form-control" placeholder="Last name" onChange={(e) => {setLastName(e.target.value)}}/>
                                <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <input type="text" value={email} className="form-control" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                                <div className="line"></div>
                            </div>
                            <div className="text-center">
                                <label>No. of people {people} </label>
                                <input data-testid="people" type="number" min="0" max="10" value={people} onChange={(e) => {setPeople(e.target.value)}}/>
                            </div>
                            <div className="text-center">
                                <label>Date:</label>
                                <ReactDatePicker selected={startDate} excludeDates={booked} onChange={(date) => setStartDate(date)} showTimeSelect excludeTimes={[setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),]} dateFormat="MMMM d, yyyy h:mm aa" />
                            </div>
                            <button className="btn-main-offer reserve-btn" type="submit" disabled={!getIsFormValid()}>Reserve a table</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Booking;