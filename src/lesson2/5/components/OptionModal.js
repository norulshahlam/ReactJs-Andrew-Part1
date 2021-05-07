import React from "react";
import Modal from "react-modal";

/*
A modal is a message box that is displayed on top of your screen. Modals put an overlay on the screen; therefore, they take visual precedence over all the other elements.

isOpen = boolean. if true, it will popup
contentLabel= what u 1 2 display on the modal
onRequestClose=what happens if u click outside the box

to use the modal, simply wrap the component with <Modal />
*/

const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.closeModal}
    >
      {props.selectedOption && <p>{props.selectedOption}</p>}
      <button onClick={props.closeModal}>Close</button>
      <h3>Selected Option</h3>
    </Modal>
  );
};

export default OptionModal;
