import React, {useContext} from "react";
import { store } from "./App";


const Count = () => {
    const [data, setData] = useContext(store);
    return(
        <div>
            <h3> Products Count: {data.length} </h3>
        </div>
    )
}

export default Count;