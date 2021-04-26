import { datatype, name } from "faker";
import listMemberNames, { Member } from "./index";

test("mapping function exists", () => {
  expect(typeof listMemberNames).toEqual("function");
});

test("returns empty array if there are no members", () => {
  expect(listMemberNames([])).toEqual([]);
});

test("lists all member names", () => {
  const members: Member[] = [];
  const names: string[] = [];

  for (let i = 0; i < 20; i++) {
    const member: Member = {
      age: datatype.number(100),
      firstName: name.firstName(),
      lastName: name.lastName(),
      occupation: name.jobTitle(),
    };

    members.push(member);
    names.push(`${member.lastName}, ${member.firstName}`);
  }

  expect(listMemberNames(members)).toEqual(names);
});
