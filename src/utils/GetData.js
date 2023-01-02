import getElement from "./getElement";
// import { useContext } from "react";
// import { DataContext } from "../../utils/getContext";
import MainApi from "../api/MainApi";

import { headerStaticData } from "../static/headerStaticData";
import { footerStaticData } from "../static/footerStaticData";
import { mainPageStaticData } from "../static/mainPageStaticData";
import { projectListStaticData } from "../static/projectListStaticData";
import { portfolioPageStaticData } from "../static/portfolioPageStaticData";
import { projectPageStaticData } from "../static/projectPageStaticData";
import { orderFormStaticData } from "../static/orderFormStaticData";
import { contactsPageStaticData } from "../static/contactsPageStaticData";
import { pricesPageStaticData } from "../static/pricesPageStaticData";

import {
  headerRoute,
  footerRoute,
  mainPageRoute,
  portfolioRoute,
  contactsPageRoute,
  pricesPageRoute,
  orderFormRoute,
  projectPageRoute,
} from "../constants/routes"



function GetData() {

  // const appData = useContext(DataContext);
  // console.log(appData)
  // if(smth === 'context') {
    
  // requires path to obj data
  const headerData = MainApi(headerRoute, 'header', headerStaticData)[0];
  const footerData = MainApi(footerRoute, 'footer', footerStaticData)[0];
  const mainPageData = MainApi(mainPageRoute, 'mainPage', mainPageStaticData)[0];
  const projectsList = MainApi('', 'projectList', projectListStaticData )[0];
  const portfolioPageData = MainApi(portfolioRoute, 'portfolio', portfolioPageStaticData)[0];
  const projectData = MainApi(projectPageRoute, 'project', projectPageStaticData)[0];
  const orderFormData = MainApi(orderFormRoute, 'orderForm', orderFormStaticData)[0];
  const contactsData = MainApi(contactsPageRoute, 'contacts', contactsPageStaticData)[0];
  const pricesData = MainApi(pricesPageRoute,  'prices', pricesPageStaticData)[0];

  // console.log(contactsData)
  // console.log(pricesData)

  
  return {
    header: headerData.data.attributes.header,
    mainPage: mainPageData.data[0].attributes,
    projectsList: projectsList.data[0].attributes.projectItems,
    footer: footerData.data.attributes.footer,
    portfolio: portfolioPageData.data[0].attributes,
    project: projectData.data.attributes,
    orderForm: orderFormData.data.attributes,
    contacts: contactsData.data[0].attributes,
    prices: pricesData.data[0].attributes,
  };
}
  // const paths = {
  //   headerPath:'data.attributes.header',

  // }

  // 'header': 'data.data.attributes.header'
  // 'page': 'page.data[0].attributes'
  // 'element': 'element.data[0].attributes.element'



  // switch (element) {
  //   case "header":
  //     // data = !!MainApi(headerRoute) ? MainApi(headerRoute) : headerStaticData;
  //     data = headerStaticData;
  //     console.log(data);
  //     return data.data.attributes.header;
  //   // case 'footer':
  //   //     return !!MainApi(footerRoute) ? MainApi(footerRoute) : footerStaticData;
  //   case "mainPage":
  //     //     return !!MainApi(mainPageRoute) ? MainApi(mainPageRoute) : mainPageStaticData;

  //     // use ? operator here?
  //     return [
  //       mainPageStaticData.data[0].attributes,
  //       projectListStaticData.data[0].attributes.projectItems,
  //     ];
  //   case "footer":
  //     data = footerStaticData;
  //     return data.data.attributes.footer;

  //   case "portfolio":
  //     return [
  //       portfolioPageStaticData.data[0].attributes,
  //       projectListStaticData.data[0].attributes.projectItems,
  //     ];
  //   case "project":
  //     return projectPageStaticData.data.attributes;
  //   case "orderForm":
  //     return orderFormStaticData.data.attributes;
  //   case "contacts":
  //     return contactsPageStaticData.data[0].attributes;
  //   case "prices":
  //     return pricesPageStaticData.data[0].attributes;
  // }

// }

export default GetData;
