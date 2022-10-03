const userModel = require('../models/user.model');

module.exports = {
    getUsers: async function(req, res) {
        try{
            const users = await userModel.find({ });
            if(!users){
                return res.status(404).json({
                    error : 'Data not found'
                })
            }else{
                return res.status(200).json({
                    sucess: "get data successfully!",
                    data: users
                })
            }
        } catch(error){
            res.status(404).json({
                error: "Error while fetching data"
            })
        }
    }
}