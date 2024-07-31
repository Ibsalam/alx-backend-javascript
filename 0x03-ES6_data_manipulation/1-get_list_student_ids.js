/**
 * Function: getListStudentIds
 * Description: This function takes an array of student objects and returns an array of their ids.
 *              If the input is not an array, the function returns an empty array.
 * 
 * @param {Array} list - An array of student objects, where each object contains an id property.
 * @returns {Array} - An array of ids extracted from the student objects, or an empty array if the input is not an array.
 */

export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map(student => student.id);
}
