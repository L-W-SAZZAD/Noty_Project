import React from "react";

export default function SingleOption({ option }) {
  return (
    <div>
      <li>{option.title}</li>
      <TextField
        onFocus={() => setShow(true)}
        placeholder="Recherchez un établissement... (Boutiques, Restaurants, etc.)"
      />
    </div>
  );
}
