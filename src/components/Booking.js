import React, {useState} from "react";
import { validateEmail } from "../utils";

const Booking = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState("0");
    const [date, setDate] =useState("2023-01-01");

    const getIsFormValid = () => {
        return (
            firstName &&
            validateEmail(email) &&
            date != "2023-01-01"
        );
    };

    const clearForm = () => {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPeople("0")
        setDate("2023-01-01")
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
                                <input type="number" min="0" max="10" value={people} onChange={(e) => {setPeople(e.target.value)}}/>
                            </div>
                            <div className="text-center">
                                <label>Date:</label>
                                <input type="date" value={date} min="2023-01-01" max="2024-01-01" onChange={(e) => {setDate(e.target.value)}}/>
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