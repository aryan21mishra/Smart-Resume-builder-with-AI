import React from "react";
import {
  AIFeedbackHeaderSkeleton,
  KeyWordAnalysisSectionSkeleton,
  OverallSumaryAndKeyStrengthSectionSkeleton,
  RequiredImprovementsSectionSkeleton,
  ScoreMetricSkeleton,
} from "../../../components/skeletons/index";
import AiFeedbackHeader from "./AiFeedbackHeader";
import ScoreMetricSection from "./ScoreMetricSection";
import KeyAnalysisection from "./KeyAnalysisection";
import OverallSummaryAndKeyStrengthSection from "./OverallSummaryAndKeyStrengths";
import RequiredImprovementsSection from "./RequiredImprovements";
const AiFeedBackClient = () => {
  const isLoading = false;
  return (
    <div class="min-h-screen bg-zinc-950 text-zinc-50 p-6 font-sans antialiased">
      <header class="max-w-6xl mx-auto mb-10 border border-zinc-800 bg-zinc-900/50 p-6 rounded-xl flex flex-col md:flex-row items-end justify-between gap-6">
        {isLoading ? <AIFeedbackHeaderSkeleton /> : <AiFeedbackHeader />}
      </header>
      <main class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        <section class="lg:col-span-4 space-y-6">
          {isLoading ? <ScoreMetricSkeleton /> : <ScoreMetricSection />}
          {isLoading ? (
            <KeyWordAnalysisSectionSkeleton />
          ) : (
            <KeyAnalysisection />
          )}
        </section>

        <section class="lg:col-span-8 space-y-6">
          {isLoading ? (
            <OverallSumaryAndKeyStrengthSectionSkeleton />
          ) : (
            <OverallSummaryAndKeyStrengthSection />
          )}
          {isLoading ? (
            <RequiredImprovementsSectionSkeleton />
          ) : (
            <RequiredImprovementsSection />
          )}
        </section>
      </main>
    </div>
  );
};

export default AiFeedBackClient;
