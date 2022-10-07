const userModel = require('../models/user.model');

module.exports = {
  createUsers: async function (req, res) {
    try {
      const users = await userModel.insertMany({
        FirstName: "Ashish",
        LastName: "Mishra",
        id: 1
      })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },



  InsertingArray: async function (req, res) {
    try {
      const arr = [
        {
          FirstName: "red",
          LastName: "blue",
          id: 123

        },
        {
          FirstName: "green",
          LastName: "yellow",
          id: 456
        }
      ]

      const users = await userModel.insertMany(arr)

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },

  bulkwrite: async function (req, res) {
    try {

      const users = await userModel.bulkWrite(
        [

          {
            updateOne: {
              filter: { FirstName: "red" },
              update: {
                $set: {
                  id: 786
                }
              }
            }
          },

          {
            deleteOne: {
              filter: {
                FirstName: "green"
              }
            }
          }
        ])

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },




  updateOne: async function (req, res) {

    try {

      const users = await userModel.updateOne(
        { FirstName: "Ashish" },
        { $set: { LastName: 'hogaya' } }, { upsert: true })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {
      console.log(error);

    }

  },


  findOneAndDelete: async function (req, res) {
    try {

      const users = await userModel.findOneAndDelete({ id: { $gte: 0 } })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {
      console.log(error);
    }

  },
  findOneAndRepace: async function (req, res) {
    try {

      const users = await userModel.findOneAndReplace(
        { id: 786 }, { id: 123, FirstName: "abdul", LastName: "hashim" }

      );

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {
      console.log(error);
    }
  },
  findOneAndUpdate: async function (req, res) {
    try {
      const users = await userModel.findOneAndUpdate({ FirstName: "abdul" },
        { $set: { LastName: "azam" } })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findOneAndUpdateProjection: async function (req, res) {

    console.log("inside projection");
    try {
      const users = await userModel.findOneAndUpdate({ id: 123 }, {
        $set: { FirstName: "ashish" },
      },
        {
          new: true,
          projection: {
            FirstName: true,
          },
        })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findOneAndUpdateSort: async function (req, res) {




    try {
      const users = await userModel.findOneAndUpdate({ id: 456 }, { $set: { FirstName: "vishal" } }).sort(
        { FirstName: -1, LastName: 1 })


      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findOneAndupadteUpsert: async function (req, res) {
    try {

      const users = await userModel.findOneAndUpdate({ FirstName: "Ram" }, { $set: { LastName: "rao" } },
        {
          new: true,
          upsert: true // Make this update into an upsert
        })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {

    }
  },
  find: async function (req, res) {
    try {
      const users = await userModel.find({ FirstName: "vishal" })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findAll: async function (req, res) {
    try {
      const users = await userModel.find({})

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {

      console.log(error);

    }
  },
  findInc: async function (req, res) {

    try {
      const users = await userModel.find({ FirstName: { $in: ["ashish", "vishal"] } }, { id: 0, _id: 0, LastName: 0 });

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findExc: async function (req, res) {
    try {
      const users = await userModel.find({ FirstName: { $in: ["ashish", "vishal"] } }, { id: 1, FirstName: 1 });
      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findEquals: async function (req, res) {
    try {
      const users = await userModel.find().where("id").equals(124)
      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {
      console.log(error);
    }
  },
  findNequals: async function (req, res) {

    try {
      const users = await userModel.find({ id: { $ne: 123 } })
      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {
      console.log(error);
    }
  },
  findGt: async function (req, res) {

    try {
      const users = await userModel.find({ id: { $gt: 123 } })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {

    }
  },
  findGte: async function (req, res) {
    try {
      const users = await userModel.find({ id: { $gte: 124 } })
      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findLt: async function (req, res) {
    try {
      const users = await userModel.find({ id: { $lt: 124 } })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {
      console.log(error);
    }

  },
  findLte: async function (req, res) {
    try {
      const users = await userModel.find({ id: { $lte: 123 } })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findMatch: async function (req, res) {
    try {
      const users = await userModel.find({ id: { $in: [123] } })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findNmatch: async function (req, res) {
    try {
      const users = await userModel.find({ id: { $nin: [124] } })

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findSort: async function (req, res) {
    try {
      const users = await userModel.find({ id: { $gt: 122, $lt: 457 } }).sort({ id: -1 })
      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  findLimitSort: async function (req, res) {
    try {
      const users = await userModel.find().limit(2).sort({ id: -1 })
      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }

    } catch (error) {
      console.log(error);
    }
  },
  UpdateSet: async function (req, res) {
    try {
      const users = await userModel.updateOne({ FirstName: 'vishal' },
        { $set: { FirstName: 'New MongoDB Tutorial' } })


      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  Updateupsert: async function (req, res) {
    try {
      const users = await userModel.updateOne(
        { id: 123 },
        { $set: { FirstName: "fruits" } },
        { upsert: true, multi: true },
      )

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  updateIncrement: async function (req, res) {
    try {
      const users = await userModel.updateOne({ FirstName: "fruits" }, { $inc: { id: 10 } })
      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  updateUnset: async function (req, res) {
    try {
      const users = await userModel.updateOne(
        { id: 133 },
        { $unset: { FirstName: "", LastName: "" } }
      )

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
      console.log(error);
    }
  },
  updateRename: async function (req, res) {
    try {
      const users = await userModel.updateOne({ id: 133 },
        { $rename: { FirstName: 'alias', }})

        if (!users) {
          return res.status(404).json({
            error: 'Data not found'
          })
        } else {
          return res.status(200).json({
            sucess: "get data successfully!",
            data: users
          })
        }
    } catch (error) {
        console.log(error);
    }
  },
  UpdateManyUpsert: async function (req, res) {
       try {
        const users= await userModel.updateMany({id:{$lt:124}},{$set:{LastName:"red"}},{upsert : true, multi : true})
        if (!users) {
          return res.status(404).json({
            error: 'Data not found'
          })
        } else {
          return res.status(200).json({
            sucess: "get data successfully!",
            data: users
          })
        }
       } catch (error) {
          console.log(error);
       }
   },
  Deleteone: async function (req, res) { 
       try {
        const users = await userModel.deleteOne({id:133})

        if (!users) {
          return res.status(404).json({
            error: 'Data not found'
          })
        } else {
          return res.status(200).json({
            sucess: "get data successfully!",
            data: users
          })
        }
       } catch (error) {
          console.log(error);
       }
   },
  Deletemany: async function (req, res) { 
      try {
        const users = await userModel.deleteMany({id:{$lt:456}})

        if (!users) {
          return res.status(404).json({
            error: 'Data not found'
          })
        } else {
          return res.status(200).json({
            sucess: "get data successfully!",
            data: users
          })
        }
      } catch (error) {
          console.log(error);
      }
  },
  replaceOne: async function (req, res) {
      try {
        const users = await userModel.replaceOne({FirstName:"faisal"},{FirstName:"kaisal"})
        if (!users) {
          return res.status(404).json({
            error: 'Data not found'
          })
        } else {
          return res.status(200).json({
            sucess: "get data successfully!",
            data: users
          })
        }
      } catch (error) {
         console.log(error);
      }
   },
  count: async function (req, res) { 
    try {
      const users = await userModel.count()

      if (!users) {
        return res.status(404).json({
          error: 'Data not found'
        })
      } else {
        return res.status(200).json({
          sucess: "get data successfully!",
          data: users
        })
      }
    } catch (error) {
        console.log(error);
    }
  },











  //FIND ONE AND REPLACE


  postUsers: async function (req, res) {
    console.log('working');

    let data = [
      {
        id: 12,
        FirstName: "ashish",
        LastName: "mishra"
      },

      {
        id: 13,
        FirstName: "vishal",
        LastName: "mishra"
      },
    ]

    try {

      const user = userModel.insertMany(data)


      res.status(200).json({
        sucess: "post data successfully!",
        data: user
      })

    } catch (error) {
      res.status(404).json({
        error: console.log(error)
      })
    }
  }
}

