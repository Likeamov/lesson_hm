'use strict'
const Service = require('egg').Service;

class UserServer extends Service {
  async getUserByName() {
   const {ctx} = this;
    try{
    const result = await ctx.model.User.findOne({
        where:{
            username 
        }
    })
    return result
   }catch(err){
    console.log(err)
    return null
   }
  }
}

// export default UserServer;

module.exports = UserServer;