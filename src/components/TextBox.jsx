import React from 'react'

function TextBox({className, heading, content}) {
  return (
    <div className={className}>
      <h3 className="text-xs font-bold mb-1">{heading}</h3>
      <p className="text-sm">{content}</p>
    </div>
  );
}

export default TextBox