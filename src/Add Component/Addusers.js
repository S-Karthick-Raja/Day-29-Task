import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";

export function Addusers() {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [profession, setProfession] = useState("");

    const history = useHistory();

    const addUser = () => {
        const newUsers = {
            name,
            avatar,
            age,
            email,
            phone,
            profession,
        };

        fetch(`${API_URL}/users`, {
            method: "POST",
            body: JSON.stringify(newUsers),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => history.push("/users"));
    };
    return (
        <div className="wrap-user-list">
            <div className="Add-user-list">
                <TextField
                    className="text-field"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="filled-basic"
                    label="User Name"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={avatar}
                    onChange={(event) => setAvatar(event.target.value)}
                    id="filled-basic"
                    label="User url"
                    variant="filled"
                    type="url"
                    focused
                />
                  <TextField
                    className="text-field"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                    id="filled-basic"
                    label="User Age"
                    variant="filled"
                    type="number"
                    focused
                />
                 <TextField
                    className="text-field"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id="filled-basic"
                    label="User Email"
                    variant="filled"
                    type="email"
                    focused
                />
                  <TextField
                    className="text-field"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    id="filled-basic"
                    label="User Phone"
                    variant="filled"
                    type="number"
                    focused
                />
                  <TextField
                    className="text-field"
                    value={profession}
                    onChange={(event) => setProfession(event.target.value)}
                    id="filled-basic"
                    label="User Profession"
                    variant="filled"
                    focused
                />
            </div>
            <div className="add-button">
                <Button onClick={addUser} variant="contained" endIcon={<SendIcon />}>
                    Create User
                </Button>
            </div>
        </div>
    );
}
