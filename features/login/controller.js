
const {createLogin} = require('./repository')

const handleLogin = async(req, res) =>{
    try{
        const {username, password} = req.body;
        const loginDetails = await createLogin(username, password)
        res.redirect('/')
        // res.send("Successfully!")
    } catch(err){
        console.log("error occured while: ", err);
        res.redirect('/')
        // res.send("Error")
    }
}

module.exports = {handleLogin}