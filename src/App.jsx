import React from 'react'

function App() {

    const [thingsToPick, setThingsToPick] = React.useState("")
    const [randomPick, setRandomPick] = React.useState("Click Button above to Pick!")

    function handleChange(event){
        setThingsToPick(event.target.value)
    }

    function handleClick(){
        const thingsArray = thingsToPick.split('\n')
        setRandomPick(thingsArray[Math.floor(Math.random() * thingsArray.length)])
    }

    return (
        <div>
            <h1>Random Picker</h1>
            <textarea placeholder="Write things to pick from on different lines in here!" value={thingsToPick}
            onChange={handleChange}/>
            <button onClick={handleClick}>Pick!</button>
            <h2>{randomPick}</h2>
        </div>

    );
}

export default App;
