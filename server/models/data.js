import Mongoose from "mongoose";

const schema = Mongoose.Schema({
  Id: {
    type: "String",
  },
  Title: {
    type: "String",
  },
  Source: {
    type: "String",
  },
  Frequency: {
    type: "String",
  },
  Unit: {
    type: "String",
  },
  Tags: {
    type: "String",
  },
  Tag2: {
    type: "String",
  },
  Tag3: {
    type: "String",
  },
  Parent: {
    type: "String",
  },
  Sibling: {
    type: "String",
  },
  Child: {
    type: "String",
  },
  TagIdx1: {
    type: "String",
  },
  TagIdx2: {
    type: "String",
  },
  TagIdx3: {
    type: "String",
  },
  OldSeries: {
    type: "String",
  },
  StateData: {
    type: "String",
  },
  GlobalData: {
    type: "String",
  },
  Key_Series: {
    type: "String",
  },
  SubCategory: {
    type: "String",
  },
  Description: {
    type: "String",
  },
  Formula: {
    type: "String",
  },
  Numerator: {
    type: "String",
  },
  Denominator: {
    type: "String",
  },
});

const dataModel = Mongoose.model("dataModel",schema,"data1");

export default dataModel;