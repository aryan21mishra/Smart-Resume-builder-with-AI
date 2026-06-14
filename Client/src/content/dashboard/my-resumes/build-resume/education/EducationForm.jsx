import FormField from "@/components/common/FormField";
import { Button } from "@/components/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { updateForm, selectResumes } from "@/redux/resumes/resumeSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EducationForm = () => {
  const [activeTab, setActiveTab] = useState("graduation");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const resume = useSelector(selectResumes);
  const educationData =
    resume?.education &&
    typeof resume.education === "object" &&
    !Array.isArray(resume.education)
      ? resume.education
      : {};

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm({
    values: educationData
  });
  // Fix #4 — watch isCurrent to conditionally disable/require End Date
  const isCurrent = watch("graduation.isCurrent");

  const onSubmit = (data) => {
    dispatch(updateForm({ field: "education", data }));
    navigate("/dashboard/my-resumes/build-resume/projects");
  };

  // Fix #5 — validate current tab fields before moving to next
  const handleGraduationNext = async () => {
    const valid = await trigger([
      "graduation.institution",
      "graduation.degree",
      "graduation.field",
      "graduation.startDate",
      "graduation.cgpa",
      ...(!isCurrent ? ["graduation.endDate"] : []),
    ]);
    if (valid) setActiveTab("intermediate");
  };

  const handleIntermediateNext = async () => {
    const valid = await trigger([
      "intermediate.institution",
      "intermediate.degree",
      "intermediate.field",
      "intermediate.startDate",
      "intermediate.endDate",
      "intermediate.cgpa",
    ]);
    if (valid) setActiveTab("high");
  };

  return (
    <div className="w-full h-full p-5">
      <div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="graduation">Graduation Details</TabsTrigger>
            <TabsTrigger value="intermediate">
              Intermediate School Details
            </TabsTrigger>
            <TabsTrigger value="high">High School</TabsTrigger>
          </TabsList>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <TabsContent value="graduation" className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold mb-5">Graduation Details</h2>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="Institution"
                  placeholder="e.g. University of California, Berkeley"
                  {...register("graduation.institution", {
                    required: "Institution is required.",
                  })}
                  errors={errors}
                  name="graduation.institution"
                />
                <FormField
                  label="Degree"
                  placeholder="e.g. B.S. Computer Science"
                  {...register("graduation.degree", {
                    required: "Degree is required.",
                  })}
                  errors={errors}
                  name="graduation.degree"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="Field of Study"
                  placeholder="e.g. Computer Science/Mathematics"
                  {...register("graduation.field", {
                    required: "Field is required.",
                  })}
                  errors={errors}
                  name="graduation.field"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 ">
                <div className="flex flex-col gap-4">
                  <FormField
                    label="Start Date"
                    type="date"
                    placeholder="e.g. 2020-01-01"
                    {...register("graduation.startDate", {
                      required: "Start date is required.",
                    })}
                    errors={errors}
                    name="graduation.startDate"
                  />
                  <div className="flex gap-4 items-center ">
                    {/* Fix #6 — removed invalid errors prop from native input */}
                    <input
                      type="checkbox"
                      {...register("graduation.isCurrent")}
                    />
                    <label className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-500">
                      Currently Attending
                    </label>
                  </div>
                </div>
                {/* Fix #4 — End Date disabled and not required when isCurrent is checked */}
                <FormField
                  label="End Date"
                  type="date"
                  placeholder="e.g. 2020-01-01"
                  disabled={isCurrent}
                  {...register("graduation.endDate", {
                    required: !isCurrent && "End date is required.",
                  })}
                  errors={errors}
                  name="graduation.endDate"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="CGPA"
                  type="number"
                  placeholder="e.g. 3.5"
                  {...register("graduation.cgpa", {
                    required: "CGPA is required.",
                  })}
                  errors={errors}
                  name="graduation.cgpa"
                />
              </div>
              <div className="flex justify-end">
                {/* Fix #5 — validate before moving to next tab */}
                <Button
                  className="mt-4 px-5! py-4! font-montserratBold"
                  variant="default"
                  size="lg"
                  type="button"
                  onClick={handleGraduationNext}>
                  Next
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="intermediate" className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold mb-5">
                Intermediate School Details
              </h2>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="School Name"
                  placeholder="e.g. DAV Public School"
                  {...register("intermediate.institution", {
                    required: "School name is required.",
                  })}
                  errors={errors}
                  name="intermediate.institution"
                />
                <FormField
                  label="Class/Standard"
                  placeholder="e.g. 10th / 12th / Intermediate"
                  {...register("intermediate.degree", {
                    required: "Class/Standard is required.",
                  })}
                  errors={errors}
                  name="intermediate.degree"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="Board/Stream"
                  placeholder="e.g. CBSE / ICSE / Science"
                  {...register("intermediate.field", {
                    required: "Board/Stream is required.",
                  })}
                  errors={errors}
                  name="intermediate.field"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 ">
                <div className="flex flex-col gap-4">
                  <FormField
                    label="Start Date"
                    type="date"
                    placeholder="e.g. 2018-01-01"
                    {...register("intermediate.startDate", {
                      required: "Start date is required.",
                    })}
                    errors={errors}
                    name="intermediate.startDate"
                  />
                </div>
                <FormField
                  label="Passing Date"
                  type="date"
                  placeholder="e.g. 2020-01-01"
                  {...register("intermediate.endDate", {
                    required: "Passing date is required.",
                  })}
                  errors={errors}
                  name="intermediate.endDate"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="Percentage/CGPA"
                  type="number"
                  placeholder="e.g. 85 / 9.2"
                  {...register("intermediate.cgpa", {
                    required: "Percentage/CGPA is required.",
                  })}
                  errors={errors}
                  name="intermediate.cgpa"
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  className="mt-4 px-5! py-4! font-montserratBold"
                  variant="default"
                  size="lg"
                  onClick={() => setActiveTab("graduation")}>
                  Previous
                </Button>
                {/* Fix #5 — validate before moving to next tab */}
                <Button
                  className="mt-4 px-5! py-4!font-montserratBold"
                  variant="default"
                  size="lg"
                  type="button"
                  onClick={handleIntermediateNext}>
                  Next
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="high" className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold mb-5">
                High School Details
              </h2>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="School Name"
                  placeholder="e.g. DAV Public School"
                  {...register("higher.institution", {
                    required: "School name is required.",
                  })}
                  errors={errors}
                  name="higher.institution"
                />
                <FormField
                  label="Class/Standard"
                  placeholder="e.g. 10th / 12th / Intermediate"
                  {...register("higher.degree", {
                    required: "Class/Standard is required.",
                  })}
                  errors={errors}
                  name="higher.degree"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                {/* Fix #2 — label typo removed */}
                {/* Fix #1 — register key was "field", now correctly "higher.field" */}
                <FormField
                  label="Board/Stream"
                  placeholder="e.g. CBSE / ICSE / Science"
                  {...register("higher.field", {
                    required: "Board/Stream is required.",
                  })}
                  errors={errors}
                  name="higher.field"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1 ">
                <div className="flex flex-col gap-4">
                  <FormField
                    label="Start Date"
                    type="date"
                    placeholder="e.g. 2018-01-01"
                    {...register("higher.startDate", {
                      required: "Start date is required.",
                    })}
                    errors={errors}
                    name="higher.startDate"
                  />
                </div>
                <FormField
                  label="Passing Date"
                  type="date"
                  placeholder="e.g. 2020-01-01"
                  {...register("higher.endDate", {
                    required: "Passing date is required.",
                  })}
                  errors={errors}
                  name="higher.endDate"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormField
                  label="Percentage/CGPA"
                  type="number"
                  placeholder="e.g. 85 / 9.2"
                  {...register("higher.cgpa", {
                    required: "Percentage/CGPA is required.",
                  })}
                  errors={errors}
                  name="higher.cgpa"
                />
              </div>
              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  className="mt-4 px-5! py-4! font-montserratBold"
                  variant="default"
                  size="lg"
                  onClick={() => setActiveTab("intermediate")}>
                  Previous
                </Button>
                <Button
                  className="mt-4 px-5! py-4! font-montserratBold"
                  variant="default"
                  size="lg"
                  type="submit">
                  Save All
                </Button>
              </div>
            </TabsContent>
          </form>
        </Tabs>
      </div>
    </div>
  );
};

export default EducationForm;
