export interface Member {
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
}

/**
 * Return a list of member names in the <Last Name, First Name> format
 *
 * @param members List of members
 * @returns List of member names in the <Last Name, First Name> format
 */
export default function listMemberNames(members: Member[]): string[] {
  return [];
}
