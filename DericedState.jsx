import { useState } from "react";

 

export const DerivedState = () => {

       const [users, setUsers] = useState([
        {name: "Alice", age:"25"},
        {name: "Bob", age:"30"},
        {name: "Charlie", age:"35"},
        {name: "Angles", age:"45"},
    ]);  

    console.log(users);
    const userCount = users.length;
    const averageAge = users.reduce((accum, curElem) => accum + curElem.age, 0)/userCount;

    return (
        <div className="main-div">
            <h1></h1>
            <ul>
                
                {
                    users.map((user, index)=>{
                          return (
                           <li key={index}>
                               {user.name}-{user.age} year old
                           </li>
                           
                           );
                    })
                }

            </ul>

            <p>Total Users: {userCount}</p>
            <p>Average Age: {averageAge}</p>
            
            
        </div>
    );
};