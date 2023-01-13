export const getPriceObj = (card, details) => {
  const priceObj = [];

  for (let i = 0; i < card.length; i++) {
    priceObj.push({ id: i, title: card[i].title, options: [] });
    for (let n = 0; n < details.length; n++) {
      if (!!details[n]["pack" + (i + 1)]) {
        priceObj[i].options.push(details[n].option);
      }
    }
  }
  return priceObj;
};
