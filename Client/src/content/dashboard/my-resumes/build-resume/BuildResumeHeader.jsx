import { Button } from "@/components/ui";
import {
  useCreateResumeMutation,
  useUpdateResumeByIdMutation,
} from "@/hooks/mutations/useResumeMutations";
import { selectResumes } from "@/redux/resumes/resumeSlice";
import {
  RiArrowLeftLongLine,
  RiCheckboxCircleLine,
  RiDownloadLine,
  RiEyeLine,
  RiLoader3Line,
  RiPencilLine,
  RiSaveLine,
} from "@remixicon/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { mapFrontendToBackend } from "@/utils/resume";

const BuildResumeHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const resume = useSelector(selectResumes);
  console.log("resume creation", resume);

  const { mutate: createResume, isPending: isCreating } =
    useCreateResumeMutation();
  const { mutate: updateResume, isPending: isUpdating } =
    useUpdateResumeByIdMutation();

  const isPending = isCreating || isUpdating;

  // Mapping paths to previous section
  const getPreviousPath = () => {
    if (pathname.includes("/personal-information"))
      return "/dashboard/my-resumes";
    if (pathname.includes("/experience"))
      return "/dashboard/my-resumes/build-resume/personal-information";
    if (pathname.includes("/education"))
      return "/dashboard/my-resumes/build-resume/experience";
    if (pathname.includes("/projects"))
      return "/dashboard/my-resumes/build-resume/education";
    if (pathname.includes("/skills"))
      return "/dashboard/my-resumes/build-resume/projects";
    if (pathname.includes("/certifications"))
      return "/dashboard/my-resumes/build-resume/skills";
    if (pathname.includes("/languages"))
      return "/dashboard/my-resumes/build-resume/certifications";
    return "/dashboard/my-resumes";
  };

  const previousPath = getPreviousPath();
  const isFirstStep = previousPath === "/dashboard/my-resumes";

  const handlePreview = () => {
    if (!resume.personalInformation?.firstName) {
      toast.error(
        "Please save your Personal Information first before previewing!",
      );
      return;
    }
    navigate("/dashboard/my-resumes/single-resume/preview");
  };

  const saveResumeHandler = () => {
    const payload = mapFrontendToBackend(resume);
    if (resume.id) {
      updateResume({ id: resume.id, data: payload });
    } else {
      createResume(payload);
    }
  };

  return (
    <div className="w-full px-4 py-5  flex justify-between items-center gap-3 border-b border-white/10">
      <div className="flex gap-3">
        <button
          onClick={() => navigate(previousPath)}
          className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors cursor-pointer bg-transparent border-none outline-none">
          <RiArrowLeftLongLine size={14} />
          <p className="text-sm font-montserratRegular max-md:hidden">
            {isFirstStep ? "All Resumes" : "Previous Step"}
          </p>
        </button>
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          <div className="flex gap-2 items-center">
            <p className="font-montserratRegular text-sm max-md:text-xs whitespace-nowrap">
              {resume.title || "Untitled Resume"}
            </p>
            <RiPencilLine size={14} />
          </div>
          <div className="flex gap-2 max-md:gap-1 items-center">
            <RiCheckboxCircleLine size={14} color={"#e8b86d"} />
            <p className="font-montserratRegular text-sm max-md:text-xs">
              Saved a few seconds ago
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 max-md:gap-1 flex-wrap">
        <Button
          variant="ghost"
          size="lg"
          disabled={isPending}
          onClick={handlePreview}>
          <RiEyeLine size={12} />
          <p className="max-md:hidden text-sm">Preview</p>
        </Button>
        <Button 
          variant="ghost" 
          size="lg" 
          disabled={isPending}
          onClick={() => window.print()}>
          <RiDownloadLine size={12} />
          <p className="max-md:hidden text-sm">Download</p>
        </Button>
        <Button
          variant="ghost"
          size="lg"
          onClick={saveResumeHandler}
          disabled={isPending}>
          {isPending ? (
            <>
              <RiLoader3Line size={12} className="animate-spin" />
              <p className="max-md:hidden text-sm">Saving...</p>
            </>
          ) : (
            <>
              <RiSaveLine size={12} />
              <p className="max-md:hidden text-sm">Save & Continue</p>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default BuildResumeHeader;
