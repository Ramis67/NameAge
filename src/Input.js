import { useState } from "react";

export default function Input(props) {
  return (
    <>
      <form onSubmit={props.onFormSubmit}>
        <input
          type="text"
          value={props.name}
          name="name"
          onChange={props.onNameChange}
          placeholder="Please give your name"
          className="border-2 border-blue-100 w-80 h-16 rounded-lg bg-slate-100 text-cyan-700 text-2xl focus:outline-none placeholder:text-2xl pl-4"
        />
        <input type="submit" value="click" className="border-2 border-blue-100 bg-slate-100 w-40 h-14 rounded-lg ml-8 font-sans text-cyan-700 text-xl cursor-pointer" />
      </form>
    </>
  );
}
