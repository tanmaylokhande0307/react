import React, { useState } from "react";
import axios from "axios";
import CardList from "./CardList";

const Form = () => {

    const handleOnChange = (event) => {
        const newText = event.target.value;
        setText(newText);
    }
 
    const [text,setText] = useState('');

    const [users,setUsers] = useState([]);

    const fetchUser = async () => {
        try {
            const { data } = await axios.get(`https://api.github.com/search/users?q=${text}`);
            return data?.items
        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    const handleClick = async (event) => {
        event.preventDefault();
        if(text){
            const items = await fetchUser();
            setUsers(items);
            console.log(users);
        }
    
    }

    return (
        <div>
            <form>
                <input type="text" value={text} onChange={handleOnChange} placeholder="Github username"/>
                <button onClick={handleClick}>Find user</button>
            </form>
            <div className="search-results">
                <CardList users={users}/>
            </div>
        </div>
    )
}

export default Form;