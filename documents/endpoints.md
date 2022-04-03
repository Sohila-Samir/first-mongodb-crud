# Endpoints:
## students:
- `GET /students` - get all the students in the database.
- `GET /students/new` - get the form to add a new student.
- `GET /students/:id` - get a certain student.
- `GET /students/:id/update ` - get the form to update a certain student.
- `POST /students` - add a new student and redirect to the `GET /students` route.
- `PUT /students/:id/update` - update a student in the database and redirect to `GET /student/:id` route.
- `DELETE /students/:id/delete` - delete a student from the database.