import React from 'react';
import './Dialog.css';

const Dialog = ({ active, setActive, children }) => {
 
  return (
    <div className={active ? "dialog active" : "dialog"} onClick={() => setActive()}>
      <div className={active ? "content active" : "content"} onClick={e => e.stopPropagation()}>
         {children}
      </div>

    </div>
  )
}
  
Dialog.propTypes = {};

Dialog.defaultProps = {};

export default Dialog;
