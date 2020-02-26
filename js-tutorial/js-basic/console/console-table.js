/*
  Goal: Advanced JavaScript Debugging with console.table().

  References:
    - https://mariusschulz.com/blog/advanced-javascript-debugging-with-console-table
*/

var languages = [
  { name: "JavaScript", fileExtension: ".js" },
  { name: "TypeScript", fileExtension: ".ts" },
  { name: "CoffeeScript", fileExtension: ".coffee" }
];

console.table(languages);
console.table(languages, ["name", "fileExtension"]);
console.table(languages, "name");
