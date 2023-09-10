import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../COMPONENTS/Navbar/Navbar";
import AccountSettings from "../../COMPONENTS/UserProfile/AccountSettings";
import "./UserProfile.css";
import ChangePassword from "../../COMPONENTS/UserProfile/ChangePassword";

const UserProfile = () => {
  const { activepage } = useParams();

  return (
    <div className="userprofile">
      <Navbar />

      {/* UserProfile , showing {activepage}
       */}

      <div className="userprofilein">
        <div className="right">
          {activepage === "accountsettings" && <AccountSettings />}
          {activepage === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
