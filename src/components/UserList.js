import React from "react";
const UserList = (props)=>{
    return(
        <ul>
            {props.users.map((user)=>(
                <li key={user.id}>
                    {user.medicine}
                    {user.description}
                    {user.price}
                    {user.quantity}</li>
            )
            )}
        </ul>
    );
}
export default UserList;