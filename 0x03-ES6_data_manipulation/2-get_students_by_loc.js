/**
 * Function: getStudentsByLocation
 * Description: This function takes an array of student objects and a city name,
 *              then returns a filtered array of students who are located in the specified city.
 * 
 * @param {Array} students - An array of student objects, where each object contains a location property.
 * @param {String} city - The name of the city to filter the students by.
 * @returns {Array} - An array of student objects who are located in the specified city.
 */

export default function getStudentsByLocation(students, city) {
  return students.filter(student => student.location === city);
}
