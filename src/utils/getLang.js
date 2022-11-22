export default function getLang() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
  }
}

// TODO
// check https://stackoverflow.com/questions/673905/how-to-determine-users-locale-within-browser 
// and try note about Intl.NumberFormat