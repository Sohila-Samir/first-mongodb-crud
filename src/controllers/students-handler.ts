import {Application, Request, Response} from 'express';
import {studentModelType} from '../models/student.js';
import {StudentClass} from '../models/student.js';
// ----------------------------------------------------------------------------------------

const student = new StudentClass;

// ----------------------------------------------------------------------------------------
const addStudentHandler = async (req: Request, res: Response) => {
  try {
    const studentInfo = {
      name: req.body.name,
      year: req.body.year,
      department: req.body.department,
      faculty: req.body.faculty,
      isFessPaid: req.body.isFessPaid,
    } as studentModelType;
    await student.addStudent(studentInfo);
    res.status(200);
    res.redirect('/students');
  } catch (err: unknown) {
    res.status(401);
    res.redirect('/students/new');
  }
};
// ----------------------------------------------------------------------------------------
const addStudentFormRoute = (_req: Request, res: Response) => {
  try {
    res.render('student/new');
  } catch (err: unknown) {
    res.status(400).send('OH NOOO! LOOKS LIKE THERE IS A PROBLEM WITH THE PAGE YOU ARE REQUESTING FOR NOW!');
  }
};
// ----------------------------------------------------------------------------------------
const deleteStudentHandler = async (req: Request, res: Response) => {
  try {
    await student.deleteStudent(req.params.id);
    res.status(200);
    res.redirect('/students');
  } catch (err: unknown) {
    res.status(401).send(`OH NOOOO!. LOOKS LIKE YOUR ACCOUNT DID NOT DELETED ${err}`);
  }
};
// ----------------------------------------------------------------------------------------
const findStudentHandler = async (req: Request, res: Response) => {
  try {
    const foundStudent = await student.findStudent(req.params.id);
    const {id, name, faculty, department, isFessPaid, year} = foundStudent;
    const neededValues = {
      id: id,
      name: name,
      faculty: faculty,
      department: department,
      isFessPaid: isFessPaid,
      year: year,
    } as studentModelType;
    res.status(200);
    res.render('student/show', {neededValues});
  } catch (err: unknown) {
    res.status(401).send(`OH NOOOO!. LOOKS LIKE WE COULD NOT FIND YOUR ACCOUNT ${err}`);
  }
};
// ----------------------------------------------------------------------------------------
const getStudentsHandler = async (_req: Request, res: Response) => {
  try {
    const allStudents = await student.getAllStudents();
    res.status(200);
    res.render('student/index', {allStudents});
  } catch (err: unknown) {
    res.status(401).send(`OH NOOOO!. LOOKS LIKE WE DID NOT FIND ANY STUDENTS FOR NOW ${err}`);
  }
};
// ----------------------------------------------------------------------------------------
const updateStudentsHandler = async (req: Request, res: Response) => {
  try {
    await student.updateStudent(req.params.id, req.body);
    console.log(req.body);
    res.status(200);
    res.redirect(`/students/${req.params.id}`);
  } catch (err: unknown) {
    res.status(401).send(`OH NOOOO!. LOOKS LIKE WE COULD NOT UPDATE YOUR ACCOUNT ${err}`);
  }
};
// ----------------------------------------------------------------------------------------
const updateStudentFormRoute = async (req: Request, res: Response) => {
  try {
    const {id} = req.params;
    const foundStudent = await student.findStudent(id);
    res.render('student/update', {id, foundStudent});
  } catch (err: unknown) {
    res.status(400).send('OH NOOO! LOOKS LIKE THERE IS A PROBLEM WITH THE PAGE YOU ARE REQUESTING FOR NOW!');
  }
};
// ----------------------------------------------------------------------------------------

// student routes
export const studentRoutes = (app: Application) => {
  app.get('/students/new', addStudentFormRoute);
  app.get('/students/:id/update', updateStudentFormRoute);
  app.get('/students/:id', findStudentHandler);
  app.get('/students', getStudentsHandler);
  app.post('/students/new', addStudentHandler);
  app.delete('/students/:id/delete', deleteStudentHandler);
  app.put('/students/:id/update', updateStudentsHandler);
};
