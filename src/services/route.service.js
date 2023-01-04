const routes = (name, id = null, lang = "ru") => {
  const baseUrl = "https://api.vaitstony.art/api/";
  const locale = `?locale=${lang}`;
  let url;
  switch (name) {

    case "mainPage":
      url =
        baseUrl +
        "main-pages" +
        locale +
        "&populate[about][populate[slide][populate]]=%2A&populate[newProjects][populate]=%2A&populate[ourTeam][populate]=%2A&populate[contactUs][populate]=%2A&populate[orderForm][populate]=%2A&populate[hero][populate]=%2A&populate[slides][populate]=%2A&populate[projectItem][populate]=%2A&populate[teamMember][populate]=%2A";
      break;

    case "header":
      url = baseUrl + "header" + locale + "&populate[header][populate]=%2A";
      break;

    case "footer":
      url = baseUrl + "footer" + locale + "&populate[footer][populate]=%2A";
      break;

    case "orderForm":
      url =
        baseUrl +
        "order-form" +
        locale +
        "&populate[formAvatars][populate]=%2A";
      break;

    case "projectList":
      url =
        baseUrl +
        "projects" +
        locale +
        "&populate[portfolioItem][populate]=%2A";
      break;

    case "portfolioPage":
      url = baseUrl + "portfolio-pages" + locale;
      break;
    case "contactsPage":
      url = baseUrl + "contacts-pages" + locale + "&populate=%2A";
      break;

    case "pricesPage":
      url =
        baseUrl +
        "prices-pages" +
        locale +
        "&populate[priceCard][populate]=%2A&populate[pageTitle][populate]=%2A&populate[priceDetails][populate]=%2A";
      break;

    case "projectPage":
      url =
        baseUrl +
        "projects/" +
        id +
        locale +
        "&populate[hero][populate]=%2A&populate[slider][populate]=%2A&populate[aboutProject][populate]=%2A&populate[projectElement][populate]=%2A&populate[image-item][populate]=%2A&populate[gallery][populate]=%2A";
      break;
  }

  return url;
};

const getRoute = (name, id) => {
  return routes(name, id);
};

export const makeFetch = async (name, id) => {
  debugger
  const url = getRoute(name, id);
  const response = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
