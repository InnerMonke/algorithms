import { name } from "faker";
import type { Member } from "./index";
import getAverageAgeOfDepartment from "./index";

test("map reduce function exists", () => {
  expect(typeof getAverageAgeOfDepartment).toEqual("function");
});

test("returns zero if there are no members", () => {
  expect(getAverageAgeOfDepartment([], "")).toEqual(0);
});

test("returns the age if there is a single member", () => {
  const age = 26;
  const chosenDepartment = "Software";
  const otherDepartment = "Sales";
  const members: Member[] = [
    {
      age: age,
      firstName: name.firstName(),
      lastName: name.lastName(),
      occupation: name.jobTitle(),
      department: chosenDepartment,
    },
    {
      age: 72,
      firstName: name.firstName(),
      lastName: name.lastName(),
      occupation: name.jobTitle(),
      department: otherDepartment,
    },
  ];

  expect(getAverageAgeOfDepartment(members, chosenDepartment)).toEqual(age);
});

test("returns the average age if there are multiple members in a single department", () => {
  const chosenAges = [27, 22, 71, 35, 24];
  const otherAges = [77, 63, 45, 56, 92, 56, 77];
  const chosenDepartment = "Marketing";
  const otherDepartment = "Product";

  const chosenDepartmentMembers: Member[] = chosenAges.map((age) => ({
    age: age,
    firstName: name.firstName(),
    lastName: name.lastName(),
    occupation: name.jobTitle(),
    department: chosenDepartment,
  }));

  const otherDepartmentMembers: Member[] = otherAges.map((age) => ({
    age: age,
    firstName: name.firstName(),
    lastName: name.lastName(),
    occupation: name.jobTitle(),
    department: otherDepartment,
  }));

  expect(
    getAverageAgeOfDepartment(
      [...chosenDepartmentMembers, ...otherDepartmentMembers],
      chosenDepartment
    )
  ).toEqual(35.8);
});
