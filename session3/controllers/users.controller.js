const axios = require("axios");
const usersJson = require("../users.json");
const {getQueryErrors} = require("../validators/users.validators");
const apiKey = "PingToServer";

const getAllUsers = async (req, res)=>{
    res.status(200).send(usersJson);
}

const getUsersByUuid = (req, res)=>{
    const {uuid} = req.params;
    const result =  usersJson.data.find((user)=>user.login.uuid === uuid);
    res.status(200).send(result);
}

const getUserByGenderOrAge = (req, res)=>{
  
  if(req.headers.authorization !== process.env.apiKey) return res.sendStatus(401);
  
  const gender = req.query.gender;
  const age = req.query.age;
  const error = getQueryErrors({ age, gender });
  if (error) {
    return res.status(422).json(error.details[0].message);
  }

  if(gender && age) return res.send(usersJson.data.filter((user)=>user.gender === gender && Number(user.dob.age) === Number(age)));
  if(gender) return res.send(usersJson.data.filter((user)=>user.gender === gender));   
  if(age) return res.send(usersJson.data.filter((user)=>Number(user.dob.age) === Number(age))); 

} 

module.exports = {getAllUsers, getUsersByUuid, getUserByGenderOrAge}