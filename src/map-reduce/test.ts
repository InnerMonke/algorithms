import { name } from "faker";
import type { Member } from "./index";
import getAverageAge from "./index";

test("map reduce function exists", () => {
  expect(typeof getAverageAge).toEqual("function");
});

test("returns zero if there are no members", () => {
  expect(getAverageAge([])).toEqual(0);
});

test("returns the age if there is a single member", () => {
  const age = 26;
  const members: Member[] = [
    {
      age: age,
      firstName: name.firstName(),
      lastName: name.lastName(),
      occupation: name.jobTitle(),
    },
  ];

  expect(getAverageAge(members)).toEqual(age);
});

test("returns the average if there are multiple members", () => {
  const ages = [1, 7, 22, 47];
  const members: Member[] = ages.map((age) => ({
    age: age,
    firstName: name.firstName(),
    lastName: name.lastName(),
    occupation: name.jobTitle(),
  }));

  expect(getAverageAge(members)).toEqual(19.25);
});
