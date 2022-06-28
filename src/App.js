import { React, useState } from "react";

import data from "./data";
import Person from "./Person";
function App() {
  const [persons, setPersons] = useState(data);

  const clearItems = (oldPersons) => {
    setPersons((oldPersons) => {
      return [];
    });
  };
  return (
    <>
      <section className="box">
        <div className="content-start max-h-screen text-text-lg text-slate-100 font-extrabold outline-dashed outline-gray-50 p-1">
          🎉 {persons.length} birthdays today
        </div>
        <div className="flex flex-col max-h-screen justify-start text-lg  font-extrabold">
          {persons.map((person) => {
            return (
              <> 
                <div key={person.id}>
                  <Person props={person} />
                </div> 
              </>
            );
          })}
        </div>
        <div>
          <button
            className="p-2 my-3 rounded-full text-lg btn"
            onClick={() => {
              clearItems();
            }}
          >
            Clear items
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
