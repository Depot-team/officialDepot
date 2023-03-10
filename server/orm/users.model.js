// Define and export the sequelize model that represents the table users.

module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define("users", {
      name:{type:DataTypes.STRING},
      email:{type:DataTypes.STRING},
      password:{type:DataTypes.STRING},
      adress:{type:DataTypes.STRING},
      phoneNumber:{type:DataTypes.INTEGER},
  },{timestamps:true});

  return User;
};