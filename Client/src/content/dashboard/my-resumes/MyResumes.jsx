import React from 'react';
import { 
  RiAddLine, 
  RiEdit2Line, 
  RiDownloadLine, 
  RiFilePaperLine,
  RiMore2Fill
} from '@remixicon/react';
import { Button } from "../../../components/ui/index";

// Mock Data
const mockResumes = [
  { id: 1, title: "Software Engineer Resume", lastUpdated: "2 days ago" },
  { id: 2, title: "Product Manager CV", lastUpdated: "1 week ago" },
];

const MyResumes = () => {
  return (
    <div className="p-5 lg:p-10 w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-montserratBold text-white text-2xl lg:text-3xl mb-2">
          My Resumes
        </h1>
        <p className="text-sm lg:text-lg font-montserratRegular text-gray-400">
          Create, edit, and manage your resumes
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {/* Create New Card */}
        <div className="group relative flex flex-col items-center justify-center h-[340px] border-2 border-dashed border-white/20 rounded-2xl bg-white/5 hover:bg-white/10 hover:border-[#e8b86d]/50 transition-all cursor-pointer overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-[#e8b86d]/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#e8b86d]/20 transition-transform duration-300">
            <RiAddLine size={32} className="text-[#e8b86d]" />
          </div>
          <p className="font-montserratBold text-white text-lg">Create New Resume</p>
          <p className="font-montserratRegular text-sm text-gray-400 mt-2 text-center px-4">Start from scratch or choose a template</p>
        </div>

        {/* Existing Resumes */}
        {mockResumes.map((resume) => (
          <div key={resume.id} className="group relative flex flex-col h-[340px] border border-white/10 rounded-2xl bg-white/5 hover:border-white/30 transition-all overflow-hidden shadow-xl">
            {/* Thumbnail Area */}
            <div className="flex-1 bg-black/40 flex items-center justify-center relative overflow-hidden">
              <RiFilePaperLine size={64} className="text-white/10 group-hover:scale-110 transition-transform duration-500" />
              
              {/* Hover Actions Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                <Button variant="outline" className="w-3/4 rounded-full bg-white text-black hover:bg-gray-200 border-none font-montserratBold">
                  <RiEdit2Line size={18} className="mr-2" /> Edit
                </Button>
                <Button variant="outline" className="w-3/4 rounded-full bg-white/10 text-white hover:bg-white/20 border-white/20 font-montserratRegular">
                  <RiDownloadLine size={18} className="mr-2" /> Download
                </Button>
              </div>
            </div>

            {/* Details Area */}
            <div className="p-4 border-t border-white/10 bg-black/60 backdrop-blur-md">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-montserratBold text-white truncate pr-2 text-base" title={resume.title}>
                  {resume.title}
                </h3>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <RiMore2Fill size={18} />
                </button>
              </div>
              <p className="font-montserratRegular text-xs text-gray-400">
                Updated {resume.lastUpdated}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyResumes;
