export const getDashboardAnalytic = async (userId) => {
  return await Resume.aggregate([
    {
      $match: {
        $and: [
          {
            userId: userId,
          },
          {
            createdAt: -1,
          },
        ],
      },
    },
    {
      $lookup: {
        from: "feedback",
        localField: "_id",
        foreignField: "resumeId",
        as: "feedback",
        pipeline: [
          {
            $project: {
              atsScore: 1,
              contentScore: 1,
              keywordScore: 1,
              formatScore: 1,
              overallFeedback: 1,
              impactScore: 1,
              sectionFeedback: 1,
              improvements: 1,
              missingKeywords: 1,
              strengths: 1,
              jobMatchScore: 1,
            },
          },
        ],
      },
    },
    {
      $lookup: {
        from: "rewriteSection",
        localField: "_id",
        foreignField: "resumeId",
        as: "rewriteSection",
        pipeline: [{ $limit: 3 }],
      },
    },
  ]);
};
