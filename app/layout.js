"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RootLayout;
exports.metadata = void 0;
require("../public/css/main.css");
var _google = require("next/font/google");
var _Header = _interopRequireDefault(require("./Base/Header"));
var _Footer = _interopRequireDefault(require("./Base/Footer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var inter = (0, _google.Inter)({
  subsets: ["latin"]
});
var metadata = {
  title: "Cary",
  description: "Cary is a platform for discovering the best new products, brands, and influencers in fashion and beauty.",
  openGraph: {
    title: "Cary facebook",
    description: "Cary is a platform for discovering the best new products, brands, and influencers in fashion and beauty.",
    images: [{
      url: "https://cary.arealglam.com/images/logo.png",
      width: 800,
      height: 600,
      alt: "Cary"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@NicoTery39168",
    title: "Cary",
    description: "Cary is a platform for discovering the best new products, brands, and influencers in fashion and beauty.",
    image: "https://cary.arealglam.com/images/logo.png"
  }
};
exports.metadata = metadata;
function RootLayout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("html", {
    lang: "en"
  }, /*#__PURE__*/React.createElement("body", null, /*#__PURE__*/React.createElement(_Header.default, null), /*#__PURE__*/React.createElement("main", {
    className: "main"
  }, children, /*#__PURE__*/React.createElement(_Footer.default, null)), /*#__PURE__*/React.createElement("div", {
    id: "popups"
  })));
}