import { PRODUCTION } from "../envConfig.js";
const MODULE = location.pathname.split('/').slice(-2)[0];

(() => {
  if (PRODUCTION) {
    if (MODULE) {
      document.getElementById('cssStyles').href = `./styles/${MODULE}.min.css`;
      document.getElementById('globalStyles').href = '../../assets/styles/app.min.css'
    } else {
      document.getElementById('cssStyles').href = './assets/styles/app.min.css';
    }
  } else {
    if (MODULE) {
      document.getElementById('cssStyles').href = `./styles/${MODULE}.css`;
      document.getElementById('globalStyles').href = '../../assets/styles/app.css'
    } else {
      document.getElementById('cssStyles').href = './assets/styles/app.css';
    }
  }
})();