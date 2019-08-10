import _ from "lodash";
export const pagination = (items, currentPage, perPage) => {
  const startIndex = (currentPage - 1) * perPage;
  return _(items)
    .slice(startIndex)
    .take(perPage)
    .value();
};
