import {useEffect, useState} from "react";
import ProgressBar from "./ProgressBar.jsx";

const TIMER = 3000;

export default function DeleteConfirmation({onConfirm, onCancel}) {
  console.log('DeleteConfirmation RENDER');
  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    console.log('TIMER SET');
    
    return () => {
      console.log('TIMER CLEANUP');
      clearTimeout(timer);
    }
  }, [onConfirm])
  // cleanup function runs before:
  // - useEffect is run again
  // OR
  // - component gets dismounted ( removed from the DOM )
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button
          onClick={onCancel}
          className="button-text"
        >
          No
        </button>
        <button
          onClick={onConfirm}
          className="button"
        >
          Yes
        </button>
      </div>
      <ProgressBar/>
    </div>
  );
}
