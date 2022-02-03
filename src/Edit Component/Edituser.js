import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { API_URL } from "../global_constants";


export function Editusers() {
  const { id } = useParams();

  const [user, setUsers] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setUsers(mv));
  }, [id]);

  // only show the update user when the data is available
  return user ? <UpdateUser user={user} /> : "";
}

function UpdateUser({ user, id }) {
  const [name, setName] = useState(user.name);
  const [avatar, setAvatar] = useState(user.avatar);
  const [age, setAge] = useState(user.age);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [profession, setProfession] = useState(user.profession);

  const history = useHistory();

  const edituser = (id) => {

    const UpdatedUser = {
      name,
      avatar,
      age,
      email,
      phone,
      profession,
    };

    fetch(`${API_URL}/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(UpdatedUser),
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
        <Button
          onClick={edituser}
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
