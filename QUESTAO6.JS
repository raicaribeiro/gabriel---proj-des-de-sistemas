function modifyAttendanceList(students, newStudent, position, removedStudent) {
    students = students.filter(student => student !== removedStudent);
    students.splice(position, 0, newStudent);
    return students;
}

