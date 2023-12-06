/* const input = 1;
const currentOutput = getOrdinalNumber(input);
const targetOutput = "1st";


look at test
// 1st argument: "converts 1 to an ordinal number", a string which describes the behaviour we’re testing for
//2nd argument: function () {}, we will write some assertions in this function () {} to check the behaviour

test("converts 1 to an ordinal number", function () {});

//We need to write an assertion inside the body of function () {} inside get-ordinal-number.test.js
// we want to check that the following is true: We expect getOrdinalNumber(1) to be "1st"

We expect getOrdinalNumber(1) to be "1st"
expect(getOrdinalNumber(1)).toBe("1st");
  */

// function toBe is used to check that the current output of getOrdinalNumber(1) and the target output of "1st" are equal to each other.

/* So the whole test looks like this:
function getOrdinalNumber() {} // this part added after first test
test("converts 1 to an ordinal number", function () {
  const input = 1;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "1st";

  expect(currentOutput).toBe(targetOutput);
});  */

// We can try running the file get-ordinal-number.test.js with node in the following way:
// node get-ordinal-number.test.js
// but we get an error:
/* ReferenceError: test is not defined  This is because test isn’t defined anywhere in the file.We need to execute this file so that the Jest API is available in our file. We can do this by running the test file using Jest: we do this using an npm script. */

// when we run test The test code is throwing a ReferenceError
/*This means that we haven’t defined a function named getOrdinalNumber, but we’re trying to use it.To fix this, we can declare getOrdinalNumber. function getOrdinalNumber() {} we put this code on the top of test line now run the code agai npm test to terminal, but now we have another fail it says 
The test case that failed
The target output and the current output
The line number where error occurred
Jest defines Expected and Received in the test feedback:

Expected: “1st”
Received: undefined */

function getOrdinalNumber() {
  return "1st";
}

test("converts 1 to an ordinal number", function () {
  const input = 1;
  const currentOutput = getOrdinalNumber(input);
  const targetOutput = "1st";

  expect(currentOutput).toBe(targetOutput);
});

test("works for any number ending in 1", function () {
  expect(getOrdinalNumber(1)).toBe("1st");
  expect(getOrdinalNumber(11)).toBe("11th");
  expect(getOrdinalNumber(21)).toBe("21st");
});
