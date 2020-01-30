const express = require('express');
const router = express.Router();
// const model = require('../models/index');
// GET users listing.
// router.get('/', function(req, res, next) {
// });


const C_App = require("../controllers/c_user");

router.route("/user").get(C_App.index);
router.route("/user_create").post(C_App.usercreate);

// router.get('/', async function (req, res, next) {
//  res.status(200).json({status: 1, message: 'Hello Word'});
// });

// router.get('/', async function (req, res, next) {
//     try {
//       const users = await model.users.findAll({});
//       if (users.length !== 0) {
//         res.json({
//           'status': 'OK',
//           'messages': '',
//           'data': users
//         })
//       } else {
//         res.json({
//           'status': 'ERROR',
//           'messages': 'EMPTY',
//           'data': {}
//         })
//       }
//     } catch (err) {
//       res.json({
//         'status': 'ERROR',
//         'messages': err.messages,
//         'data': {}
//       })
//     }
//   });
// // POST users
// router.post('/', function(req, res, next) {
// });
// // UPDATE users
// router.patch('/:id', function(req, res, next) {
// });
// // DELETE users
// router.delete('/:id', function(req, res, next) {
// });
module.exports = router;