import { name } from "faker";
import filter from "./index";

test("filter function exists", () => {
  expect(typeof filter).toEqual("function");
});

test("filters out users under the age of 18", () => {
  const ages = [16, 21, 52, 13, 66, 0, -22, 17, 19, 18, 40];

  const expectedAges = [21, 52, 66, 19, 18, 40];

  const users = ages.map((age) => ({
    age,
    firstName: name.firstName(),
    lastName: name.lastName(),
    occupation: name.jobTitle(),
  }));

  expect(filter(users).map((user) => user.age)).toEqual(expectedAges);
});

test("returns empty array if all users are under the age of 18", () => {
  const ages = [5, 7, 17, 5, 3, 6, 8, 2, 5];
  const users = ages.map((age) => ({
    age,
    firstName: name.firstName(),
    lastName: name.lastName(),
    occupation: name.jobTitle(),
  }));
  expect(filter(users).map((user) => user.age)).toEqual([]);
});

test("returns empty array if there are no users", () => {
  expect(filter([]).map((user) => user.age)).toEqual([]);
});
