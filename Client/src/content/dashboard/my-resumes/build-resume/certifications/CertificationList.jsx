import React from "react";
import {
  RiAddLine,
  RiAwardLine,
  RiCalendarLine,
  RiExternalLinkLine,
  RiPencilLine,
  RiDeleteBinLine,
} from "@remixicon/react";
import { Button } from "@/components/ui";
import { useDispatch, useSelector } from "react-redux";
import { selectResumes, deleteCertification } from "@/redux/resumes/resumeSlice";
import { useNavigate } from "react-router-dom";

const formatDate = (date) => {
  if (!date) return "No Expiry";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const CertificationList = ({ setActiveTab, setEditIndex }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const certifications = useSelector(selectResumes)?.certifications || [];

  return (
    <div className="flex flex-col gap-5 px-5 py-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-montserratBold text-white">
            Certifications
          </h2>
          <p className="text-xs text-white/50 mt-1">
            Showcase your certifications, credentials, and achievements.
          </p>
        </div>

        <Button
          type="button"
          variant="default"
          size="lg"
          onClick={() => {
            setEditIndex?.(null);
            setActiveTab?.("addCertification");
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-montserratBold cursor-pointer">
          <RiAddLine size={18} />
          Add Certification
        </Button>
      </div>

      {/* Empty State */}
      {certifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl py-16 bg-white/[0.02]">
          <RiAwardLine size={42} className="text-white/20 mb-4" />
          <h3 className="text-white text-sm font-montserratSemiBold">
            No Certifications Added
          </h3>
          <p className="text-white/40 text-xs mt-2 text-center max-w-sm">
            Add certifications to strengthen your professional credibility and
            showcase verified skills.
          </p>
          <Button
            type="button"
            variant="default"
            size="lg"
            onClick={() => {
              setEditIndex?.(null);
              setActiveTab?.("addCertification");
            }}
            className="mt-5 flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-montserratBold cursor-pointer">
            <RiAddLine size={18} />
            Add Your First Certification
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={cert._id || idx}
              className="rounded-2xl border border-white/10 bg-[#121212] p-5 transition hover:border-white/20">
              {/* Top */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-white text-base font-montserratBold">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-[#e8b86d] font-montserratMedium mt-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-white/40">
                      <RiCalendarLine size={14} />
                      <span>
                        {formatDate(cert.issueDate)} —{" "}
                        {cert.noExpiry ? "No Expiry" : formatDate(cert.expiryDate)}
                      </span>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="text-xs text-white/50">
                      Credential ID:{" "}
                      <span className="text-white/80">{cert.credentialId}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setEditIndex?.(idx);
                      setActiveTab?.("addCertification");
                    }}
                    className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition cursor-pointer">
                    <RiPencilLine size={16} />
                  </button>
                  <button
                    onClick={() => {
                      dispatch(deleteCertification(idx));
                    }}
                    className="w-9 h-9 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 flex items-center justify-center text-red-400 transition cursor-pointer">
                    <RiDeleteBinLine size={16} />
                  </button>
                </div>
              </div>

              {/* Credential Link */}
              {cert.url && (
                <div className="mt-5">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] text-xs text-white/80 transition">
                    <RiExternalLinkLine size={15} />
                    View Credential
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Save & Continue bottom bar */}
      <div className="flex gap-4 items-center mt-6 pb-6 border-t border-white/5 pt-6">
        <Button
          variant="outline"
          onClick={() => {
            setEditIndex?.(null);
            setActiveTab?.("addCertification");
          }}
          className="flex-1 border border-dashed border-white/10 hover:border-[#e8b86d]/40 hover:text-[#e8b86d] bg-transparent text-white/60 py-3! rounded-xl font-montserratMedium text-sm cursor-pointer transition">
          + Add Certification
        </Button>
        <Button
          variant="default"
          onClick={() => navigate("/dashboard/my-resumes/single-resume/preview")}
          className="flex-1 bg-[#e8b86d] hover:bg-[#e8b86d]/90 text-black py-3! rounded-xl font-montserratBold text-sm tracking-wide cursor-pointer transition">
          Preview Resume
        </Button>
      </div>
    </div>
  );
};

export default CertificationList;
