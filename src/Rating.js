import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Rating = ({ active, setActive, question, qnumber, setQnumber, handlesubmit }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log("shoo", show)

  return (

    <>
      <p className="questuin_number">{`${qnumber}/5`}</p>

      <div>
        {" "}
        <p className='question'>{`${qnumber}. ${question}`}</p>
        {
          qnumber === 5 ?
            <input className='form-control' onChange={(e) => setActive(e.target.value)} placeholder='Please write here...' /> :
            <div className="rating_box">
              <div className={`rating_number ${active === 1 ? "active" : ""}`} onClick={() => setActive(1)}>1</div>
              <div className={`rating_number ${active === 2 ? "active" : ""}`} onClick={() => setActive(2)}>2</div>
              <div className={`rating_number ${active === 3 ? "active" : ""}`} onClick={() => setActive(3)}>3</div>
              <div className={`rating_number ${active === 4 ? "active" : ""}`} onClick={() => setActive(4)}>4</div>
              <div className={`rating_number ${active === 5 ? "active" : ""}`} onClick={() => setActive(5)}>5</div>
            </div>

        }

      </div>

      <div className="buttons">
        {qnumber != 1 && <button className="prev" onClick={() => qnumber > 1 && setQnumber(qnumber - 1)}>Prev</button>}
        {qnumber != 5 && <button className="next" onClick={() => qnumber < 5 && setQnumber(qnumber + 1)}>Next</button>}
      </div>
      <button className="submit" onClick={() => (handlesubmit(), handleShow())}> Submit</button>
      <>

        <Modal show={show} onHide={handleClose}>
          <Modal.Body className='feedback'>
            <h6>Thanks for your feedback</h6>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Body>

        </Modal>
      </>
    </>
  )
}

export default Rating