import {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';

export default function Modal({open, children, onClose}) {
  const dialog = useRef();
  
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);
  // dialog is not yet defined when the component function runs first time
  // useEffect runs AFTER the component function is executed
  
  
  return createPortal(
    <dialog
      className="modal"
      ref={dialog}
      onClose={onClose}
    >
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
};
