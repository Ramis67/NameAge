import React, { useState } from "react";
import useFetch from "./useFetch.js";
import Input from "./Input.js";
import Age from "./Age.js";

export default function Name() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const { get } = useFetch();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    get(`https://api.agify.io/?name=${name}`)
      .then((data) => {
        if (data) {
          setItems(data);
          console.log(data);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="flex bg-[url('img/marek.jpg')] bg-cover bg-center h-screen">
      <div className="my-80 mx-auto">
        <Input onFormSubmit={handleFormSubmit} onNameChange={handleNameChange}/>
        {Object.entries(items).map((item) => {
        if (item[0] === "age") {
          return (
            <>
              <Age info={item} />
            </>
          );
        }
      })}
      </div>
    </div>
  );
}
