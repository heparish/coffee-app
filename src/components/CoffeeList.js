import React, {useEffect} from 'react';
import {useState} from "react";

function CoffeeList() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    // const [images, setImages] = useState([]);
    
const CoffeeList = () => {

  useEffect(() => {
    fetch('http://127.0.0.1:5000/') 
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                // setImages(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}, [])
if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading...</div>;
} else {
    return (
        <h2>List of coffees</h2>
    );
}
}
    };
export default CoffeeList;