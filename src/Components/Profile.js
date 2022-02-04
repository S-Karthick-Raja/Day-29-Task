export function Profile({ name, avatar, email, editButton }) {
    return (
        <div className="profile-container">
            <div className="profile">
                <img className="profile-avatar" src={avatar} alt={name} />
                <div>
                    <p className="profile-detail">
                        <span style={{ color: "crimson", fontWeight: "bold" }}>Name:</span>{" "}
                        {name}
                    </p>
                    <p className="profile-detail">
                        <span style={{ color: "crimson", fontWeight: "bold" }}>Email:</span>{" "}
                        {email}
                    </p>
                    <div>{editButton}</div>
                </div>
            </div>
        </div>
    );
}
