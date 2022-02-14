// The Age Calculator
// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
const currentYear = 2022
// Store their birth year in a variable.
const myBirthYear = 1987
// Calculate their 2 possible ages based on the stored values.

const myAge = currentYear - myBirthYear
// Output them to the screen like so: “They are either NN or NN”, substituting the values.

console.log(`They are either ${myAge} or NN`)

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables:
// number of children
const children = 5
// partner’s name
const partnerName = 'Loui'
// geographic location
const geo = 'Artic'
// job title

const jobTitle = 'Pizza Head Chef'

// Output your fortune to the screen like so: “You will be a X in Y, and married to Z with N kids.”
console.log(
    `You will be a ${jobTitle} in ${geo}, and married to ${partnerName} with ${children} kids.`
)
// Using Math functions
// JavaScript has a built-in tool that can generate a random number between 0 and 1. This tool is called a method. We’ll talk about methods more later in the class. For now, know if you type Math.random(), you’ll get a random number between 0 and 1.

// Using this tool, update your fahrenheit to celsius tempature conversion program to do the following:

// Instead of inputing a value for the Fahrenheit tempature, use Math.random() to generate a random tempature between 0 and 100
const tempF = Math.floor(Math.random() * 101)

// Have to program output: “It is NN°F today. That’s NN°C.”

// The Temperature Converter
// Let’s make a program to convert celsius tempatures to fahrenheit and vice versa, so we can complain about the weather with our friends oversees.

// Reminder: To convert celsius to fahrenheit, multiply by 9, then divide by 5, then add 32. To convert fahrenheit to celsius, deduct 32, then multiply by 5, then divide by 9.
const tempConvertor = (temp, tempUnit) => {
    if (tempUnit.toUpperCase() === 'C') {
        const fah = ((temp * 9) / 5 + 32).toFixed(2)
        return `${fah}\u00B0` + 'F'
    }
    if (tempUnit.toUpperCase() === 'F') {
        const cel = (((temp - 32) * 5) / 9).toFixed(2)
        return `${cel}\u00B0` + 'C'
    }
}

// const celsius = tempConvertor(tempF, 'C')
const fah = tempConvertor(tempF, 'F')

console.log(tempConvertor(37, 'C'), 'Celsius to Fah')
console.log(fah, 'Fah to Celsius')
// Unicode Characters: To print the degrees symbol in JavaScript, we need to use the write \u00B0 to represent the unicode character for the degress symbol.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output “NN°C is NN°F”.
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output “NN°F is NN°C.”
