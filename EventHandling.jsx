import "./EV.css";

export const EventHandling = () => {
  
    // function handleButtonClick() {
    //     alert("Hey I am onClick Event");
    // }

    const handleButtonClick = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.type );
        
        alert("Hey I am onClick Event");
    };

    const handleWelcomeUser = (user) =>{
        console.log(`Hey ${user}, Welcome`);
    }

    return(
        <>
        <button onClick={handleButtonClick}>click Me</button>
        <br/>
        <button onClick={(event) => handleButtonClick(event)}>click Me 2</button>
        <br/>
        <button onClick={(event)=>console.log(event) }> Inline Function</button>
        <button onClick={()=>alert("Hey i am inline function")}>Inline Arr fun</button>
        {/* <button onClick={handleWelcomeUser("Alok")}>click Me</button>  */}
        <button onClick={()=>handleWelcomeUser("Alok")}>click Me</button> 
        <button onClick={()=>handleWelcomeUser("Ram")}>click Me</button> 
        </>
    );
}; 