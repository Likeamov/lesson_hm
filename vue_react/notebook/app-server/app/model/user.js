'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER,
         primaryKey: true, 
         autoIncrement: true   
     },
     username: STRING(100),
     ctime:STRING(100),
     avatar:STRING(100),
     password:STRING(100),
     email:STRING(100),
     phone:STRING(100),
  })
  
  return User;
}