import mongoose from "mongoose";

const timetableSchema = new mongoose.Schema({

  course:{
    type:String,
    required:true
  },

  department:{
    type:String,
    required:true
  },

  semester:{
    type:Number,
    required:true
  },

  examType:{
    type:String,
    enum:[
      "Mid Semester Examination",
      "End Semester Examination",
      "Special Mid Semester Examination",
      "Special End Semester Examination"
    ],
    required:true
  },

  exams:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Exam"
    }
  ],

  createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Faculty",
    required:true
  }

},{timestamps:true});


const Timetable = mongoose.model("Timetable",timetableSchema);

export default Timetable;