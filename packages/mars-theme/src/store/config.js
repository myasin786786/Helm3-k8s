/* -- set app title --*/
const AppTitle = "RNS Solutions";

/* -- set app mode -- */
const AppMode = ["default"];

/* -- set API URLs --*/
const development = "http://18.221.121.169:4000/api";
const production = "http://18.221.121.169:4000/api";
const staging = "http://3.15.22.214:4000/api";
// const gtmId = "GTM-PD6TLM2";
const gtmId = "GTM-NVMMRLR";
const websiteLink ="https://staging-web.antlia.io"

let ApiUrl = "";
// let ApiSocket ='';

switch (AppMode[0]) {
  case "development":
    ApiUrl = development;
    break;
  case "production":
    ApiUrl = production;
    break;
  case "staging":
    ApiUrl = staging;
    break;
  default:
    ApiUrl = "https://admin-backend.antlia.io/api/";
}

export { AppTitle, ApiUrl, AppMode, gtmId, websiteLink };

const API = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : "https://rns-site-backend.rnssol.com/api/";
const firebaseAPI = "https://firestore.googleapis.com/v1/projects/rns-solutions/databases/(default)/documents:runQuery";

export const wordPressLink = "https://test.cashero.com";

export const FirebaseEndPoints = {
  Blogs: `${firebaseAPI + "blogs"}`,
}

