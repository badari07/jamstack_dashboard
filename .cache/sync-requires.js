const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Volumes/Baddy-T5/front-end/FE-2018/FE_master/jamstack_dashboard/.cache/dev-404-page.js"))),
  "component---src-pages-dashboard-js": hot(preferDefault(require("/Volumes/Baddy-T5/front-end/FE-2018/FE_master/jamstack_dashboard/src/pages/dashboard.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Volumes/Baddy-T5/front-end/FE-2018/FE_master/jamstack_dashboard/src/pages/index.js")))
}

