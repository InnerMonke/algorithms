export interface Member {
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
}

/**
 * Return the average age of the members, 0 if no members are present
 *
 * @param members List of members
 * @returns Average age of the members
 */
export default function getAverageAge(members: Member[]): number {
  return 0;
}
