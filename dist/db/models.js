"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require('sequelize');
var secrets;
try {
    secrets = require('./../secrets.json');
}
catch (e) {
    console.error('Create your own secrets file lazybones');
    secrets = require('./../secret-sample.json');
}
var DATABASE_URL = process.env.DATABASE_URL || ('postgres://' + secrets.DB_USER + ":" + secrets.DB_PASSWORD + "@" + secrets.DB_HOST + ":5432/" + secrets.DATABASE);
var db = new Sequelize(DATABASE_URL);
var User = db.define('user', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    contact: Sequelize.STRING,
    designation: Sequelize.STRING,
    centre: Sequelize.STRING
});
var Lead = db.define('lead', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    contact: { type: Sequelize.STRING, allowNull: false },
    dob: Sequelize.STRING,
    gaurdianName: Sequelize.STRING,
    gaurdianContact: Sequelize.STRING,
    gaurdianEmail: Sequelize.STRING,
    college: Sequelize.STRING,
    branch: Sequelize.STRING,
    university: Sequelize.STRING,
    collegeBatch: Sequelize.STRING,
    address: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    pincode: Sequelize.STRING,
    coursesOfInterest: Sequelize.ARRAY(Sequelize.STRING),
    centresOfInterest: Sequelize.ARRAY(Sequelize.STRING)
    // TODO: Ask sir about the next key
    ,
    whoToldYouAboutUs: Sequelize.ARRAY(Sequelize.STRING),
    VMCRollNumber: Sequelize.STRING,
    CBRollNumber: Sequelize.STRING,
    cbStudentReferral: Sequelize.STRING,
    status: Sequelize.STRING
});
var Comment = db.define('comment', {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    comment: Sequelize.STRING(1234)
});
Comment.belongsTo(Lead);
Comment.belongsTo(User);
Lead.hasMany(Comment);
User.hasMany(Comment);
db.sync({ force: false }).then(function () {
    console.log('Database configured');
});
var models = {};
exports.default = { models: models };
module.exports = { models: models };
//# sourceMappingURL=models.js.map