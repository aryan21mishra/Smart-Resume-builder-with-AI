export const resumeQueryKeys = {
  all: ["resume"],
  getById: (id) => [...resumeQueryKeys.all, "getById", id],
  //   updateById: (id) => [...resumeQueryKeys.all, "updateById", id],
  //   deleteById: (id) => [...resumeQueryKeys.all, "deleteById", id],
  //   duplicateById: (id) => [...resumeQueryKeys.all, "duplicateById", id],
};
