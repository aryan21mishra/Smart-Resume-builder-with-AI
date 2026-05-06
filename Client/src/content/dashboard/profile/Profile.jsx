import React from "react";
import ProfileSection from "../../../components/common/ProfileSection";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/user/userSlice";
import Image from "../../../components/common/Image";
import { Button, Input } from "../../../components/ui/index";

import { Camera, Upload, Trash2 } from "lucide-react";
import { useState } from "react";
import FormField, {
  FormFieldWithIcon,
} from "../../../components/common/FormField";
import { Label } from "@radix-ui/react-label";
import {
  RiMailLine,
  RiPhoneLine,
  RiLinkedinBoxLine,
  RiGithubLine,
  RiMapPinLine,
  RiGlobalLine,
} from "@remixicon/react";
function Profile() {
  const userInfo = useSelector(selectUser);
  const [selectedImage, setSelectedImage] = useState(userInfo?.avatar);

  const selectImageHandler = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.addEventListener("load", function () {
        setSelectedImage(this.result);
      });
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="p-5 lg:p-10 w-full max-w-190 flex flex-col gap-6">
      <div>
        <h1 className="font-montserratBold text-white text-2xl lg:text-3xl mb-2">
          Personal Information
        </h1>
        <p className="text-sm lg:text-lg font-montserratRegular text-gray-400">
          Update your name, bio, and contact details
        </p>
      </div>
      {/* profile section */}
      <ProfileSection
        title={"Profile Photo"}
        para={"JPG, PNG or GIF · Max 2MB"}>
        <div className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="relative group">
            <div className="w-24 h-24 border-2 border-white/10 rounded-full overflow-hidden flex items-center justify-center bg-white/5 transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              {userInfo?.avatar ? (
                <Image
                  src={selectedImage}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="italic font-montserratBold text-white text-3xl">
                  {userInfo?.firstName?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          </div>

          <div className="w-full sm:flex-1 flex flex-col gap-4">
            <div className="font-montserratRegular text-white text-center sm:text-left">
              <p className="text-xl lg:text-2xl font-montserratBold">
                {userInfo?.firstName} {userInfo?.lastName}
              </p>
              <p className="text-gray-400 text-sm">{userInfo?.email}</p>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-3">
              <label
                htmlFor="avatar-upload-btn"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-montserratRegular text-white hover:bg-white/10 transition-all cursor-pointer">
                <Upload size={16} className="text-gray-400" />
                Upload new photo
                <input
                  id="avatar-upload-btn"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={selectImageHandler}
                />
              </label>

              {userInfo?.avatar && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-400 hover:text-red-300 hover:bg-red-500/10 gap-2 font-montserratRegular"
                  onClick={() => {}}>
                  <Trash2 size={16} />
                  Remove
                </Button>
              )}
            </div>
          </div>
        </div>
      </ProfileSection>

      <ProfileSection
        title="Basic Information"
        para="This information appears on your public profile">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <FormField
            label="First Name"
            type="text"
            placeholder="Enter your first name"
          />
          <FormField
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
        </div>
        <div className="mb-4">
          <FormField
            label="Professtion"
            // errors={errors}
            name={"professtion"}
            type="text"
            placeholder="Enter your profession"
          />
          <p className="text-[11px] mt-2 text-gray-400 font-montserratRegular">
            Shown below your name on shared resumes
          </p>
        </div>
        <div className="mb-4">
          <Label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-500">
            Bio
          </Label>
          <textarea
            type="text"
            placeholder="Enter your bio"
            className="border border-white/10 rounded-lg p-2 w-full h-32 bg-white/5 text-white focus:border-blue-500/50 focus:outline-none"
          />
          <p className="text-sm text-gray-400">Max 200 characters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-4 w-full ">
            <FormFieldWithIcon
              label="Location"
              name="location"
              type="text"
              placeholder="Select your country"
              icon={RiMapPinLine}
              iconPosition="left"
            />
          </div>
          <div className="mb-4 ">
            <FormFieldWithIcon
              label="Website"
              name="website"
              type="url"
              placeholder="Enter your website"
              icon={RiGlobalLine}
              iconPosition="left"
            />
          </div>
        </div>
      </ProfileSection>

      <ProfileSection
        title="Contact Information"
        para="Used to pre-fill your resume contact section">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormFieldWithIcon
            label="Email Address"
            name="email"
            type="email"
            placeholder="you@example.com"
            icon={RiMailLine}
            iconPosition="left"
          />
          <FormFieldWithIcon
            label="Phone Number"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            icon={RiPhoneLine}
            iconPosition="left"
          />
          <FormFieldWithIcon
            label="LinkedIn URL"
            name="linkedin"
            type="url"
            placeholder="https://linkedin.com/in/username"
            icon={RiLinkedinBoxLine}
            iconPosition="left"
          />
          <FormFieldWithIcon
            label="GitHub URL"
            name="github"
            type="url"
            placeholder="https://github.com/username"
            icon={RiGithubLine}
            iconPosition="left"
          />
        </div>
      </ProfileSection>
    </div>
  );
}

export default Profile;
