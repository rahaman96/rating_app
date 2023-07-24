import { useState } from "react";
import "./App.css";
import Rating from "./Rating";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [active1, setActive1] = useState()
  const [active2, setActive2] = useState()
  const [active3, setActive3] = useState()
  const [active4, setActive4] = useState()
  const [active5, setActive5] = useState()
  const [qnumber, setQnumber] = useState(1)
  const question1 = "How satisfied are you with our products?"
  const question2 = "How fair are the prices compared to similar retailers?"
  const question3 = "How satisfied are you with the value for money of your purchase? "
  const question4 = "On a scale of 1-10 how would you recommend us to your friends and family?"
  const question5 = "What could we do to improve our service?"
  const handlesubmit = () => {
    console.log("datatata")
    localStorage.setItem("data", JSON.stringify({
      Question1: question1,
      Question1_rating: active1,
      Question2: question2,
      Question2_rating: active2,
      Question3: question3,
      Question3_rating: active3,
      Question4: question4,
      Question4_rating: active4,
      Question5: question5,
      Question5_rating: active5,

    }))
  }

  return (
    <div className="App">
      <div className="content">
        <h3 className="customer">Customer Survey</h3>
        {qnumber === 1 && <Rating active={active1} setActive={setActive1} question={question1} qnumber={qnumber} setQnumber={setQnumber} handlesubmit={handlesubmit} />}
        {qnumber === 2 && <Rating active={active2} setActive={setActive2} question={question2} qnumber={qnumber} setQnumber={setQnumber} handlesubmit={handlesubmit} />}
        {qnumber === 3 && <Rating active={active3} setActive={setActive3} question={question3} qnumber={qnumber} setQnumber={setQnumber} handlesubmit={handlesubmit} />}
        {qnumber === 4 && <Rating active={active4} setActive={setActive4} question={question4} qnumber={qnumber} setQnumber={setQnumber} handlesubmit={handlesubmit} />}
        {qnumber === 5 && <Rating active={active5} setActive={setActive5} question={question5} qnumber={qnumber} setQnumber={setQnumber} handlesubmit={handlesubmit} />}
      </div>
    </div>
  );
}

export default App;
