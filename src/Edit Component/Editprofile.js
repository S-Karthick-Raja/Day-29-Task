import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";


export function Editprofile() {
    const { id } = useParams();

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/profile/${id}`, { method: "GET" })
            .then((data) => data.json())
            .then((mv) => setProfile(mv));
    }, [id]);

    // only show the update user when the data is available
    return profile ? <UpdateProfile profile={profile} /> : "";
}

function UpdateProfile({ profile, id }) {
    const [name, setName] = useState(profile.name);
    const [avatar, setAvatar] = useState(profile.avatar);
    const [email, setEmail] = useState(profile.email);

    const history = useHistory();

    const editprofile = (id) => {

        const UpdatedProfile = {
            name,
            avatar,
            email,
        };

        fetch(`${API_URL}/profile/${profile.id}`, {
            method: "PUT",
            body: JSON.stringify(UpdatedProfile),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => history.push("/profile"));
    };
    return (
        <div className="wrap-user-list">
            <div className="Add-user-list">
                <TextField
                    className="text-field"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    id="filled-basic"
                    label="Profile Name"
                    variant="filled"
                    focused
                />
                <TextField
                    className="text-field"
                    value={avatar}
                    onChange={(event) => setAvatar(event.target.value)}
                    id="filled-basic"
                    label="Profile Avatar"
                    variant="filled"
                    type="url"
                    focused
                />
                <TextField
                    className="text-field"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    id="filled-basic"
                    label="Profile Email"
                    variant="filled"
                    type="email"
                    focused
                />
            </div>
            <div className="add-button">
                <Button
                    onClick={editprofile}
                    color="success"
                    variant="contained"
                    endIcon={<SendIcon />}
                >
                    Save
                </Button>
            </div>
        </div>
    );
}
