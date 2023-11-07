let confession = `
My secret is that I really like cake.
Sometimes I sneak into the fridge at night and steal my housemate's cake
`;

const secret = "cake";
confession = confession.replaceAll(secret, "x".repeat(secret.length));
console.log(confession);

// a) How many function calls are there in this file?1

// b) Explain what the expression confession.replaceAll(secret,'x'.repeat(secret.length)); is doing WRITE X FOR EACH CHARECTER OF CAKE SO IT WILL BE  4

// c) How many inputs do we pass to replaceAll when we call it? How can you tell?We pass two inputs to replaceAll. The first input represents the string to be replaced, which is secret, and the second input represents the string to replace it with, which is "x".repeat(secret.length).

// d) How any inputs do we pass to repeat when we call it?  How can you tell? We pass only one input when calling repeat, which is secret.length, specifying how many times to repeat the string "x".
// e) What kind of statement is on line 7? The statement on line 7 is a console.log statement. This statement is used to print the value of the confession variable to the console.
