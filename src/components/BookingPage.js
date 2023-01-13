import "react-datepicker/dist/react-datepicker.css";
import BookingForm from "./BookingForm";


const BookingPage = ({times, updateTimes, initializeTimes}) => {  
    return (
        <div id="reserve-header" className="reserve-header">
            <div className="text-center">
                <h1>Reserve a table</h1>
                <p>Please fill the form and we'll be glad to help you with your reservation!</p>
            </div>
            <div className="container">
                 <BookingForm times={times} updateTimes={updateTimes} initializeTimes={initializeTimes} />
            </div>
       </div>
    )
};

export default BookingPage;



    //    <div>
    //    <h1>Book your table!</h1>
    //    <BookingForm times={times} updateTimes={updateTimes} initializeTimes={initializeTimes} />
    //  </div> 