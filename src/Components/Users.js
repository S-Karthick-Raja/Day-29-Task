
export function User({ name, avatar, age, email, phone, profession, editButton, deleteButton }) {


    return (
        <section className="user-main">
            <div className="user-container">
                <img className="user-avatar" src={avatar} alt={name} />
                <div>
                    <p className="user-detail"><span style={{ color: "crimson", fontWeight: "bold" }}>Name:</span> {name}</p>
                    <p className="user-detail"><span style={{ color: "crimson", fontWeight: "bold" }}>Age:</span>  {age}</p>
                    <p className="user-detail"><span style={{ color: "crimson", fontWeight: "bold" }}>Email:</span> {email}</p>
                    <p className="user-detail"><span style={{ color: "crimson", fontWeight: "bold" }}>Phone:</span> {phone}</p>
                    <p className="user-detail"><span style={{ color: "crimson", fontWeight: "bold" }}>profession:</span> {profession}</p>
                    <div>
                        {editButton} {deleteButton}
                    </div>
                </div>
            </div>
        </section>
    );
}

