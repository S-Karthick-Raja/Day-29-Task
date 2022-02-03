import { useEffect, useState } from "react";
import { API_URL } from "../global_constants";
import { User } from "../Components/Users";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";


export default function Fetchusers() {
    const [profile, setProfile] = useState([]);
    const history = useHistory();

    // GET - METHOD
    const getProfile = () => {
        fetch(`${API_URL}/users`)
            .then((data) => data.json())
            .then((ur) => setProfile(ur));
    };
    useEffect(getProfile, []);

    // DELETE- METHOD
    const deleteprofile = (id) => {
        fetch(`${API_URL}/users/${id}`, {
            method: "DELETE",
        }).then(() => getProfile())
    };


    return (
        <div className="user">
            {profile.map(({ name, avatar, id, age, email, phone, profession }) => (
                <User
                    key={id}
                    name={name}
                    avatar={avatar}
                    age={age}
                    email={email}
                    phone={phone}
                    profession={profession}
                    editButton={
                        <Button
                            color="success"
                            aria-label="edit-movie"
                            onClick={() => history.push("/edit-user/" + id)}
                        >
                            Edit <EditIcon />
                        </Button>
                    }
                    deleteButton={
                        <Button
                            onClick={() => deleteprofile(id)}
                            color="error"
                            aria-label="delete-user"
                        >
                            Delete <DeleteIcon />
                        </Button>
                    }

                />
            ))}
        </div>
    )
};
