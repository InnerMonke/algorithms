interface User {
  firstName: string;
  lastName: string;
  age: number;
  occupation: string;
}

/**
 * Return a list of all adult users (over the age of 18) in a given list of users
 *
 * @param users List of users to filter
 * @returns List of adult users
 */
export default function filterAdults(users: User[]): User[] {
  return users;
}
