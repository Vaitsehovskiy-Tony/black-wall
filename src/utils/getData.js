import MainApi from "../api/MainApi";
import headerStaticData from '../static/headerStaticData';
import mainPageStaticData from '../static/mainPageStaticData'
    import {headerRoute, footerRoute, mainPageRoute} from "../config/routes";

function getData(element) {
    let data;
    switch (element) {
        case 'header':
            // data = !!MainApi(headerRoute) ? MainApi(headerRoute) : headerStaticData;
            data =  headerStaticData;
            return data.data.attributes.header
        // case 'footer':
        //     return !!MainApi(footerRoute) ? MainApi(footerRoute) : footerStaticData;
        case 'mainPage':
        //     return !!MainApi(mainPageRoute) ? MainApi(mainPageRoute) : mainPageStaticData;

            data = mainPageStaticData;
            // use ? operator here?
            return data.data[0].attributes
        // case 'header':
        //     return !!MainApi(headerRoute) ? MainApi(headerRoute) : headerStaticData;
        // case 'header':
        //     return !!MainApi(headerRoute) ? MainApi(headerRoute) : headerStaticData;
        // case 'header':
        //     return !!MainApi(headerRoute) ? MainApi(headerRoute) : headerStaticData;
        // case 'header':
        //     return !!MainApi(headerRoute) ? MainApi(headerRoute) : headerStaticData;


    }
}

export default getData;