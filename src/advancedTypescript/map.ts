const arrayOfNumber = [1, 2, 3];
const arrayOfString = arrayOfNumber.map((number) => number.toString());
console.log(arrayOfString);

//to access object's property
const obj = {
  name: "Sumon",
};
console.log(obj["name"]);

// to access type's property
type AreaNumber = {
  height: number;
  width: number;
};
const areaRectangle: AreaNumber = {
  height: 10,
  width: 12,
};
areaRectangle.height = 12; // to change a value

// if we don't want to change a value
type areaReadOnly = {
  readonly height: number;
  readonly width: number;
};
const areaOnlyRead: areaReadOnly = {
  height: 12,
  width: 10,
};
// we can not change the value of height and width because it is read only.
type A = AreaNumber["height"]; // look up types
type B = keyof AreaNumber; //width | height ,making a union

// map method
type Volume = {
  height: number;
  width: number;
  depth: number;
};
type Area<T> = {
  //   [key in keyof Volume]: Volume[key];// manual map
  [key in keyof T]: T[key]; // generic map
};
const area1: Area<{ height: number; width: number }> = {
  height: 10,
  width: 12,
};
