import React from 'react';
import { Link } from 'react-router-dom';

const Users = ( ) => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(()=>{
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
            const eredmeny = res.length
            document.title = eredmeny
            setUsers(res)
        }
        xhr.open('GET', 'data.json');
        xhr.send()
    })
    return (
        <article>
            <h1> Userek </h1>
            <p> { users.map( function(user, index){
                return <li key={ index }><Link to={"/user/"+user.id}>{ user.name }</Link></li>
            } ) } </p>
        </article>
    );
}


export default Users;