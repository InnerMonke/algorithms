export interface Member {
  firstName: string;
  lastName: string;
  age: number;
  department: string;
  occupation: string;
}

/**
 * Return the average age of the members in the given department, 0 if there are none
 *
 * @param members List of all members
 * @param department Department name
 * @returns Average age of the members in the given department
 */
export default function getAverageAgeOfDepartment(
  allMembers: Member[],
  department: string
): number {
  return 0;
}
