import headerStaticData from "../static/headerStaticData";
import footerStaticData from "../static/footerStaticData";
import mainPageStaticData from "../static/mainPageStaticData";
import { projectListStaticData } from "../static/projectListStaticData";
import { portfolioPageStaticData } from "../static/portfolioPageStaticData";
import { projectPageStaticData } from "../static/projectPageStaticData";
import { orderFormStaticData } from "../static/orderFormStaticData";
import { contactsPageStaticData } from "../static/contactsPageStaticData";
import { pricesPageStaticData } from "../static/pricesPageStaticData";

function getData(element) {
  let data;
  switch (element) {
    case "header":
      // data = !!MainApi(headerRoute) ? MainApi(headerRoute) : headerStaticData;
      data = headerStaticData;
      return data.data.attributes.header;
    // case 'footer':
    //     return !!MainApi(footerRoute) ? MainApi(footerRoute) : footerStaticData;
    case "mainPage":
      //     return !!MainApi(mainPageRoute) ? MainApi(mainPageRoute) : mainPageStaticData;

      // use ? operator here?
      return [
        mainPageStaticData.data[0].attributes,
        projectListStaticData.data[0].attributes.projectItems,
      ];
    case "footer":
      data = footerStaticData;
      return data.data.attributes.footer;

    case "portfolio":
      return [
        portfolioPageStaticData.data[0].attributes,
        projectListStaticData.data[0].attributes.projectItems,
      ];
    case "project":
      return projectPageStaticData.data.attributes;
    case "orderForm":
      return orderFormStaticData.data.attributes;
    case "contacts":
      return contactsPageStaticData.data[0].attributes;
    case "prices":
      return pricesPageStaticData.data[0].attributes;
  }
}

export default getData;
