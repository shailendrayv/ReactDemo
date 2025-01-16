import * as React from "react";

// Simulates an API call to fetch a user
function ApiCallSimulation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Rku Students" });
        }, 5000);
    });
}

// Simulates fetching an array of strings
function fetchArrayData() {
    return ["React", "JavaScript", "HTML", "CSS", "Node.js"];
}

// Functional component to render an unordered list from an array of strings
function ArrayToList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

function ApiTesting() {
    const [id, setId] = React.useState("loading....");
    const [name, setName] = React.useState("loading....");
    const [array, setArray] = React.useState([]);

    React.useEffect(() => {
        // Simulate fetching user data
        ApiCallSimulation().then((user) => {
            setId(user.id);
            setName(user.name);
        });

        // Fetch array of strings
        const data = fetchArrayData();
        setArray(data);
    }, []); // Dependency array ensures this runs only once.

    return (
        <div>
            <div>
                <br />
                <strong style={{ color: "pink" }}> User Id: {id}</strong>
                <br />
                User Name: {name}
            </div>
            <br />
            <div>
                <strong style={{ color: "red" }} >Technologies List:</strong>
                <ArrayToList items={array } />
            </div>
        </div>
    );
}

export default ApiTesting;






//create the functional componenet that will accept array of strings as an arhument convert array into unordered list fetch  data function should return array of string