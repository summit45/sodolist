import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { authService } from "../fbase";

export default ({ userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayname);
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
    };
    const onChange = (event) => {
        const { target: { value } } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await userObj.updateProfile({
                displayName: newDisplayName,
            });
        }
    };

    return (
        <>
            <p>ProfilePage</p>
            <button onClick={onLogOutClick}>Log out</button>
        </>
    );
};