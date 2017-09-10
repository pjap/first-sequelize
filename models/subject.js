'use strict';
module.exports = function(sequelize, DataTypes) {
  var Subject = sequelize.define('Subject', {
    subject__name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Subject.associate = function (models) {
      Subject.hasMany(models.Teacher, {foreignKey : 'subjectId'})
  }
  return Subject;
};
