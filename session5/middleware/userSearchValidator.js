const getQueryErrors = require("../validators/users.validators");

const userSearchValidator = (req, res, next)=>{
  const gender = req.query.gender;
  const age = req.query.age;
  const error = getQueryErrors({ age, gender });
  if (error) {
    return res.status(422).json(error.details[0].message);
  }
next();
}

module.exports = userSearchValidator;