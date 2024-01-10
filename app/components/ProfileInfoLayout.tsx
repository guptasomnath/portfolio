import React from "react";
import BannerImage from "./BannerImage";
import ProfileIcon from "./ProfileIcon";
import ProfileDetails from "./ProfileDetails";
import Tabs from "./Tabs";

export default function ProfileInfoLayout() {
  return (
    <div>
      <div className="relative">
        <BannerImage />
        <ProfileIcon />
      </div>
      <ProfileDetails />
      <Tabs />
    </div>
  );
}
