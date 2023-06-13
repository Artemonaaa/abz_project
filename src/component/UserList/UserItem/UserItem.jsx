import "./UserItem.scss";

const UserItem = ({email, name, phone, photo, position}) => {
  return (
    <div className="user-item">
      <div className="user-item-container">
        <img className="user-item-photo" src={photo} alt="UserPhoto" />
        <p className="user-item-name">{name}</p>
        <p className="user-item-position">{position}</p>
        <p className="user-item-email" title={email}>{email}</p>
        <p className="user-item-phone">{phone}</p>
      </div>
    </div>
  )
}

export default UserItem;