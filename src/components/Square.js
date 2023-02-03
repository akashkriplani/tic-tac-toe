import React from 'react';

export default function Square({ value, onClick }) {
  return (
    <button className={value ? 'btn disabled' : 'btn'} onClick={onClick}>
      {value}
    </button>
  );
}
