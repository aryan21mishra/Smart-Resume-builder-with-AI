import React from "react";
import Image from "../../../components/common/Image";
import { Button } from "../../../components/ui/index";

const ProfilePhotoSection = ({
  userInfo,
  selectedImage,
  onSelectImage,
  onRemoveImage,
}) => {
  return (
    <div className="bg-gradient-to-b from-zinc-900 to-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Avatar container */}
        <div className="relative group shrink-0">
          <div className="w-28 h-28 border border-zinc-700 rounded-2xl overflow-hidden flex items-center justify-center bg-zinc-800 transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="profile"
                className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="font-montserratBold text-zinc-300 text-4xl">
                {userInfo?.firstName?.charAt(0).toUpperCase() || "A"}
              </div>
            )}
          </div>
        </div>

        {/* Avatar info & Actions */}
        <div className="flex-1 w-full flex flex-col justify-between self-stretch gap-4 text-center md:text-left">
          <div>
            <h3 className="text-lg font-montserratBold text-zinc-200">
              Profile Photo
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              JPG, PNG or GIF · Max 2MB
            </p>
            <div className="mt-3 font-montserratRegular">
              <p className="text-xl font-semibold text-white">
                {userInfo?.firstName} {userInfo?.lastName}
              </p>
              <p className="text-zinc-400 text-sm">{userInfo?.email}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-2">
            <label
              htmlFor="avatar-upload-btn"
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 border border-zinc-700/80 hover:border-zinc-600 rounded-xl text-xs md:text-sm font-medium text-zinc-200 hover:bg-zinc-700/50 transition-all cursor-pointer active:scale-95 shadow-sm">
              <i className="ri-upload-cloud-2-line text-zinc-400 text-base"></i>
              Upload new photo
              <input
                id="avatar-upload-btn"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={onSelectImage}
              />
            </label>

            {userInfo?.avatar && (
              <Button
                variant="ghost"
                size="sm"
                className="text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 px-4 py-2.5 rounded-xl gap-2 font-medium text-xs md:text-sm transition-all"
                onClick={onRemoveImage}>
                <i className="ri-delete-bin-6-line text-base"></i>
                Remove
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhotoSection;
