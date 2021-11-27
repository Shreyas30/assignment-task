import dataModel from "../models/data.js";

export const getData = async (req,res) => {
 
        const {query} = req.query;
      
        try {
      
          const data = await dataModel.find({},{"Title":1,"Description":1,"Source":1,"Unit":1,"Frequency":1});
          
          res.status(200).json(data);
      
        } catch (err) {
          res.status(404).json({ message: err.message });
        }
};
export const getDataBySearch = async (req,res) => {
 
        const {query} = req.query;
      
        try {

          const regexQuery = new RegExp(query, 'i'); //? 'i' -> Case Insensitive search
      
          const data = await dataModel.find({ $or: [ {"Title":regexQuery},{"Description":regexQuery},{"Source":regexQuery} ]},{"Title":1,"Description":1,"Source":1,"Unit":1,"Frequency":1});
          
          res.status(200).json(data);
      
        } catch (err) {
          res.status(404).json({ message: err.message });
        }
};