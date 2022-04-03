import mongoose from 'mongoose';
import {connect} from '../sequelize.js';

// connect to the database
await connect();

// create a custom type for each document
// in the students collection in the "testingdb" database.
export type studentModelType = {
    id?: string,
    name: string,
    year: number,
    department: string,
    faculty: string,
    isFessPaid?: boolean,
    status?: string
}

// get the current year
const currentYear = new Date().getFullYear().toString() + ' Default';

// create the schema for students collection
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: currentYear,
  },
  department: {
    type: String,
    default: 'General',
  },
  faculty: {
    type: String,
    required: true,
  },
  isFessPaid: {
    type: Boolean,
    default: false,
  },
});
// -------------------------------------------------------------------------------------
// create a student model in the database
const Student = mongoose.model('Student', studentSchema);

// implementing CRUD methods
export class StudentClass {
  async addStudent(studentData: studentModelType): Promise<studentModelType> {
    try {
      const addedStudent = await Student.create(studentData);
      console.log('successful create process');
      return addedStudent;
    } catch (err: unknown) {
      console.log(err);
      throw new Error('an error occurred during saving your account');
    }
  };
  // ---------------------------------------------------------------------------------------
  async deleteStudent(studentId: string): Promise<studentModelType | null> {
    try {
      const destroyedStudent = await Student.findByIdAndDelete(studentId);
      if (destroyedStudent) {
        console.log('successful delete process');
        return destroyedStudent;
      }
      console.log(`could not find account ${studentId} to delete`);
      return null;
    } catch (err: unknown) {
      console.log(err);
      throw new Error('an error occurred during deleting your account');
    }
  }
  // -----------------------------------------------------------------------------------------
  async findStudent(studentId: string): Promise<studentModelType> {
    try {
      const particularStudent = await Student.findById(studentId);
      console.log('get a specific student process is done successfully');
      return particularStudent;
    } catch (err: unknown) {
      console.log(err);
      throw new Error(`an error occurred during getting your account by the id ${studentId}`);
    }
  }
  // -------------------------------------------------------------------------------------------
  async getAllStudents(): Promise<studentModelType[] | null> {
    try {
      const allStudents = await Student.find();
      if (allStudents) {
        console.log('get all students process is done successfully');
        return allStudents;
      }
      console.log('there is no students for now!');
      return null;
    } catch (err: unknown) {
      console.log(err);
      throw new Error('an error occurred during getting all students');
    }
  }
  // -------------------------------------------------------------------------------------------
  async updateStudent(studentId: string, updatedStudentData: studentModelType) {
    try {
      const updatedStudent = await Student.findByIdAndUpdate(studentId, updatedStudentData, {new: true, runValidators: true});
      if (updatedStudent) {
        console.log('update student process has been done successfully');
        return updatedStudent;
      }
      console.log(`there is no student with the id ${studentId}!`);
      return null;
    } catch (err: unknown) {
      console.log(err);
      throw new Error('an error occurred during updating your data');
    }
  }
  // -------------------------------------------------------------------------------------------
}
