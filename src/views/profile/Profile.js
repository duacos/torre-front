import "../../assets/styles/bgprofile.sass";
import "../../assets/styles/profile.sass";
import { useGetUser } from "../../api/index.js";

const Profile = () => {
  const profile = useGetUser();

  return (
    <>
      <header className="context">
        <div className="profile-header">
          <div className="profile-image">
            <img src={profile.person.pictureThumbnail} alt="Profile" />
          </div>
          <div className="profile-title">
            <h1>{profile.person.name}</h1>
          </div>
        </div>
      </header>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
