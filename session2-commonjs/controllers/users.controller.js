const axios = require("axios");
const usersJson = require("../users.json");


const getAllUsers = async (req, res)=>{
    res.status(200).send(usersJson);
}

const getUsersByUuid = (req, res)=>{
    const {uuid} = req.params;
    const result =  usersJson.data.find((user)=>user.login.uuid === uuid);
    res.status(200).send(result);
}

const getUserByGenderOrAge = (req, res)=>{
    const {gender, age} = req.query;
    console.log(gender +" "+ age);
    if(gender && age){
    const result = usersJson.data.filter((user)=>user.gender === gender && Number(user.dob.age) === Number(age));
       return res.send(result);
    } else if(gender){
    const result = usersJson.data.filter((user)=>user.gender === gender);
       return res.send(result);
    } else if(age){
    const result = usersJson.data.filter((user)=>Number(user.dob.age) === Number(age));
       return res.send(result);
    } else{
       res.status(404).send({message:"Not Found!!!"})
    }
}

module.exports = {getAllUsers, getUsersByUuid, getUserByGenderOrAge}