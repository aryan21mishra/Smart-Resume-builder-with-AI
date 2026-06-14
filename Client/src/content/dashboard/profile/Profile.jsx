import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserInfo, selectUser } from "../../../redux/user/userSlice";
import { Button } from "../../../components/ui/index";
import { useForm } from "react-hook-form";
import { useGetProfile } from "../../../hooks/queries/useUserQueries";
import { useUpdateProfile } from "../../../hooks/mutations/useUserMutations";
import { toast } from "sonner";

import ProfilePhotoSection from "./ProfilePhotoSection";
import BasicInfoSection from "./BasicInfoSection";
import ContactInfoSection from "./ContactInfoSection";

function Profile() {
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(userInfo?.avatar);
  const { data: userData } = useGetProfile();
  const { mutate: updateProfileMutation, isPending } = useUpdateProfile();
  useEffect(() => {
    if (userData) {
      dispatch(addUserInfo(userData?.data?.user));
    }
  }, [userData, dispatch]);

  useEffect(() => {
    if (userInfo?.avatar) {
      setSelectedImage(userInfo.avatar);
    }
  }, [userInfo?.avatar]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      firstName: userInfo?.firstName || "",
      lastName: userInfo?.lastName || "",
      professtion: userInfo?.professtion || "",
      bio: userInfo?.bio || "",
      location: userInfo?.location || "",
      website: userInfo?.website || "",
      email: userInfo?.email || "",
      phone: userInfo?.phone || "",
      linkedin: userInfo?.linkedin || "",
      github: userInfo?.github || "",
    },
  });

  const onSubmit = (data) => {
    updateProfileMutation(data);
  };

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

  const removeImageHandler = () => {
    setSelectedImage(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-10 bg-zinc-950 text-slate-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-10 border-b border-zinc-800/60 pb-6">
        <h1 className="font-montserratBold text-3xl md:text-4xl bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent tracking-tight">
          Personal Information
        </h1>
        <p className="text-sm md:text-base font-montserratRegular text-zinc-400 mt-2">
          Update your public avatar, bio, and shared resume contact details.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="space-y-8">
        <ProfilePhotoSection
          userInfo={userInfo}
          selectedImage={selectedImage}
          onSelectImage={selectImageHandler}
          onRemoveImage={removeImageHandler}
        />

        {/* Dynamic Form Section */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <BasicInfoSection register={register} errors={errors} />

          <ContactInfoSection register={register} errors={errors} />

          {/* Form Actions footer */}
          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              disabled={updateProfileMutation.isPending}
              className="w-full sm:w-auto flex justify-center items-center gap-2 py-3.5 px-8 rounded-xl font-montserratBold text-sm tracking-wide bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none active:scale-95 cursor-pointer">
              {updateProfileMutation.isPending ? (
                <>
                  <i className="ri-loader-4-line animate-spin text-base"></i>
                  Saving Changes...
                </>
              ) : (
                <>
                  <i className="ri-save-line text-base"></i>
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
