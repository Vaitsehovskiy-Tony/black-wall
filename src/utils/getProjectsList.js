// const

export const getProjectsList = (arr) => {
  const newArr = arr.map((element) => {
    element.attributes.portfolioItem.projectId = element.id;
    return element.attributes.portfolioItem || {};
  });
  newArr.sort((a, b) => {
    if (a.orderInLine === b.orderInLine ) {
      return b.id - a.id;
    }
    return a.orderInLine - b.orderInLine
  });
  return newArr;
};
