import React from 'react';
import { useParams } from "react-router-dom";

const User = () => {

    const [user, setuser] = React.useState(null);
    const params = useParams();
    const [response, setResponse] = React.useState(null);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(list => {
                const user_id = params.id;
                const userFound = list.filter(function (obj) {
                    return user_id == obj.id;
                })[0]

                setuser(userFound);

            })
    }, [])

    return (
        <article>
            {user !== null ? (
                <>
                    {(response !== null && response.status === 'success') && <div style={{ color: 'green' }}>{response.message}</div>}
                    {(response !== null && response.status === 'error') && <div style={{ color: 'red' }}>{response.message}</div>}
                    <h1> User neve </h1>
                    <form action="" onSubmit={function (e) {
                        e.preventDefault();
                        fetch('https://localhost/index.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                name: user.name,
                                email: user.email,
                            })
                        })
                            .then(function (result) {
                                return result.json()
                            })
                            .then(function (result) {
                                setResponse(result)
                            })
                    }} >
                        <label htmlFor="name"> Név: </label>
                        <br></br>
                        <input type="text" id="name" value={user.name} onChange={function (e) { setuser({ ...user, name: e.target.value }) }} ></input>
                        <br></br>
                        <label htmlFor="name"> Email: </label>
                        <br></br>
                        <input type="text" id="email" value={user.email} onChange={function (e) { setuser({ ...user, email: e.target.value }) }} ></input>
                        <input type="submit" />
                    </form> {" "}
                </>
            ) : <>Loading...</>
            }
        </article>
    );

}
export default User;