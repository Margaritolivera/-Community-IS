import React from "react";



function Button({ txt, classN, onClick }) {
    return <button
     className={classN}
     onClick={onClick}
    >
    {txt}
    </button>
  }

  export default Button;