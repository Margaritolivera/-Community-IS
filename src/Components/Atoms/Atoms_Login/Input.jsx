import React from "react";


function Input({ name, type = "text", value, onChange }) {
  return (
    <div className="input-wrapper"> 
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {name.charAt(0).toUpperCase() + name.slice(1)}: 
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

      />
    </div>
  );
}

export default Input;
