import { useEffect, useState } from "react";
import { API_URL } from "../global_constants";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import { Profile } from "../Components/Profile";
import { useHistory } from "react-router-dom";


export  function Fetchprofile() {
    const [userprofile, setUserprofile] = useState([]);
    const history = useHistory();

    
    const getuserProfile = () => {
        fetch(`${API_URL}/profile`)
            .then((data) => data.json())
            .then((ur) => setUserprofile(ur));
    };
    useEffect(getuserProfile, []);
    

    return (
        <div className="profile-1">
            {userprofile.map(({ name, avatar, id, email }) => (
                <Profile
                    key={id}
                    name={name}
                    avatar={avatar}
                    email={email}
                    editButton={
                        <Button
                            color="success"
                            aria-label="edit-Profile"
                            onClick={() => history.push("/edit-profile/" + id)}
                        >
                            Edit Profile <EditIcon />
                        </Button>
                    }
                />
            ))}
        </div>
    )
};
