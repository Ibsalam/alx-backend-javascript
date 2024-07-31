/**
 * Function: getStudentIdsSum
 * Description: This function takes an array of student objects and returns the sum of all student ids.
 * 
 * @param {Array} students - An array of student objects, where each object contains an id property.
 * @returns {Number} - The sum of all student ids.
 */

export default function getStudentIdsSum(students) {
  return students.reduce((total, student) => total + student.id, 0);
}
