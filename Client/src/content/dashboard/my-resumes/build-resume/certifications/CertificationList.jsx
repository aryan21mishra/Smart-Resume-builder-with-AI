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

const dummyCertifications = [
  {
    _id: "1",
    name: "AWS Certified Developer Associate",
    issuer: "Amazon Web Services",
    issueDate: "2025-01",
    expiryDate: "2028-01",
    credentialId: "AWS-DEV-2025-001",
    url: "https://aws.amazon.com/certification/",
  },
  {
    _id: "2",
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    issueDate: "2024-07",
    expiryDate: null,
    credentialId: "GOOGLE-UX-2024",
    url: "https://coursera.org/",
  },
];

const formatDate = (date) => {
  if (!date) return "No Expiry";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
};

const CertificationList = ({ setActiveTab }) => {
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
          onClick={() => setActiveTab?.("addCertification")}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-montserratBold">
          <RiAddLine size={18} />
          Add Certification
        </Button>
      </div>

      {/* Empty State */}
      {dummyCertifications.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed border-white/10 rounded-2xl py-16 bg-white/[0.02]">
          <RiAwardLine size={42} className="text-white/20 mb-4" />

          <h3 className="text-white text-sm font-montserratSemiBold">
            No Certifications Added
          </h3>

          <p className="text-white/40 text-xs mt-2 text-center max-w-sm">
            Add certifications to strengthen your professional credibility and
            showcase verified skills.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {dummyCertifications.map((cert) => (
            <div
              key={cert._id}
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
                        {formatDate(cert.expiryDate)}
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
                <div className="flex items-center gap-2">
                  <button className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] flex items-center justify-center text-white/70 hover:text-white transition">
                    <RiPencilLine size={16} />
                  </button>

                  <button className="w-9 h-9 rounded-xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 flex items-center justify-center text-red-400 transition">
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
    </div>
  );
};

export default CertificationList;
