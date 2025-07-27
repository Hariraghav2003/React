import React from "react";

function Reactd2(props) {
  //JSON data
  const userdetails = [
    { id: 1, Name: "Hari", city: "Madurai", State: "Tamil Nadu" },
    { id: 2, Name: "Raghav", city: "Nellai", State: "Tamil Nadu" },
    { id: 3, Name: "Suresh", city: "Coimbatore", State: "Tamil Nadu" },
    { id: 4, Name: "Sudhir", city: "Chennai", State: "Tamil Nadu" },
    { id: 5, Name: "Anil", city: "Salem", State: "Tamil Nadu" },
  ];
  const userlist = userdetails.map((user) => (
    <div key={user.id}>
      <ul>
        <li>Name: {user.Name}</li>
        <li>City: {user.city}</li>
        <li>State: {user.State}</li>
      </ul>
    </div>
  ));
  //Array Data
  const userarray = ["Hari", "Raghav", "Sudhir"];
  const userar = userarray.map((userarr) => (
    <div key={userarr.id}>
      <ol>
        <li>Userarray:{userarr}</li>
      </ol>
    </div>
  ));

  return (
    <div>
      <h1>React Day 2</h1>
      <p>
        This the Second day of React JS where we started to learn what is Recat
        JS and it's functionality.The day 2 started with the concept of Map()
      </p>
      <h5> Map function </h5>
      <p>
        The Map function is used to map a JSON ,Array data in an variable
        through which we can acsess the entire data and print like this,
      </p>
      {userlist}
      {userar}
      <h5>
        Props:It's the shortform of properties which is used to pass a value fro
        parent to child component
      </h5>
      <p>The data {props.name} is recieved from th parent node </p>
    </div>
  );
}
export default Reactd2;
