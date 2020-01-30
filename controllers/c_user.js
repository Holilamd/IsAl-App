
const User = require('../models/index').users;

module.exports = {
    index: async (req, res, next) => {
        try {
            const users  = await User.findAll({});
            if (users.length !== 0) {
              res.json({
                'status': 'OK',
                'messages': '',
                'data': users
              })
            } else {
              res.json({
                'status': 'ERROR',
                'messages': 'EMPTY',
                'data': {}
              })
            }
          } catch (err) {
            res.json({
              'status': 'ERROR',
              'messages': err.messages,
              'data': {}
            })
          }
        
      },

    
      usercreate : async(req,res,next) =>{
          try {

          }catch(err){

          }
      }
}