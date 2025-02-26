exports.sequelize = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database:'zhangben',
  username: 'root',
  password: '123456',
  define:{
    timestamps:false, // 
    freezeTableName:true,
    underscored:true,
  }
}