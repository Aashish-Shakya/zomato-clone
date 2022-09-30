"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _passport = _interopRequireWildcard(require("passport"));

var _route = _interopRequireDefault(require("./config/route.config"));

var _connection = _interopRequireDefault(require("./database/connection"));

var _auth = _interopRequireDefault(require("./api/auth"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Private route authorization config
//Database Connection
_dotenv.default.config();

const zomato = (0, _express.default)(); //adding additional passport configuration

(0, _route.default)(_passport.default);
zomato.use(_express.default.json());
zomato.use(_passport.default.initialize());
zomato.get('/', (req, res) => {
  res.json({
    message: "Server is running up"
  });
}); //   /auth/signup

zomato.use("/auth", _auth.default);
const PORT = 4000;
zomato.listen(PORT, () => {
  (0, _connection.default)().then(() => {
    console.log("Server is running with DB !!!");
  }).catch(error => {
    console.log("Server is running, but database connection failed...");
    console.log(error);
  }); // console.log(process.env.MONGO_URI)
  // console.log(`Server is running !!! on ${PORT}  `);
});