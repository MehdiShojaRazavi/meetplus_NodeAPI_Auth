const createError = require('http-errors');
const { StatusCodes: HttpStatus } = require('http-status-codes');
const UserModel = require('../../models/UserModel');

class userController{
  async registration(req, res, next){
    const { username, password, email } = req.body;
    console.log(username, password, email);
    
    try{
      const user = new UserModel({
        username,
        email,
        password
      });
      const userSaved = user.save();
      if (!userSaved) return next(new Error('Faild registration with unknown reason'));
      return res.status(HttpStatus.OK).json({message: 'User registration successfully'});
    } catch(err){
      return next(err);
    }
  }
}

module.exports = {
  Controller : new userController()
}