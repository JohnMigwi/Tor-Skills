

function Result({ user }) {
  
  return (
    <div className="user">
      <div className="user-img">
        <img src={user.imageUrl } alt={user.name} />
      </div>
      <div className="info">
        <p className="name">{user.name}</p>
        <p className="profession">{user.professionalHeadline}</p>
      </div>
    </div>
  );
}

export default Result;