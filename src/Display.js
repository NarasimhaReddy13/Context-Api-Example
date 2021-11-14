import React, {useContext, useState} from "react";
import { store } from "./App";

const Display = () => {
    const [data, setData] = useContext(store);
    const [name, setName] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        setData([
            ...data, {brandname: name}
        ])
    }

    return(
        <div> 
            Component Display 

            { data.map(item => <h4> {item.brandname} </h4>) }

            <form onSubmit={submitHandler}>
                <input type='text' placeholder="Enter Brand" onChange={(e) => setName(e.target.value)} />
                <input type="submit" value="Add" />
            </form>

        </div>
    )
}

export default Display;