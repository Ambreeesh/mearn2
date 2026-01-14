import axios from "axios";

const getAllUsers = async (req, res)=> {
    const response =  (await axios.get("https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json")).data
    res.send(response.data);  
}

const getUsersByUuid = async (req, res)=>{
    const response = (await axios.get("https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json")).data;
    const {uuid} = req.params;
    const searchedUser = response.data.find((uid)=>uid.login.uuid === uuid);
   if(uuid) return res.send(searchedUser); 
   res.status(404) 
}

const getUserByGenderOrAge =async (req, res)=>{
    
        const response = (await axios.get("https://gitlab.crio.do/public_content/node-js-sessions/-/raw/master/users.json")).data;
        const {gender, age} = req.query;
        console.log(gender +"  "+ age)
        if(gender && age){
            const x = response.data.filter(data => data.gender===gender && Number(data.dob.age) === Number(age));
            res.send(x);
        }
        else if(gender){
            const y = response.data.filter(data => data.gender===gender);
            res.send(y);
        }
       else if(age){
            const z = response.data.filter(data =>  Number(data.dob.age) === Number(age));
            res.send(z);
        } else{
            res.status(400).send("Quary parameter did not matched!")
        }
}
export {getAllUsers, getUsersByUuid, getUserByGenderOrAge};