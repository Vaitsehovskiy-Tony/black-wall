export const getProjectsList = (arr) => {
  return arr.map(element => {
    element.attributes.portfolioItem.projectId = element.id;
    return element.attributes.portfolioItem || {}
  });
}
