import React, { useState } from 'react'
import './SignUp.css'
import { Button,Modal } from 'react-bootstrap'

function SignUp() {
  const [showHide, setShowHide] = useState(false);

  const handleModalShowHide = () => setShowHide(!showHide);

  
      return(
        <div>
            <Button className="sign-up" onClick={handleModalShowHide}>
                Sign Up
            </Button>

            <Modal show={showHide}>
                <Modal.Header closeButton onClick={handleModalShowHide}>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalShowHide}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleModalShowHide}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
    }
       
   
    


export default SignUp;