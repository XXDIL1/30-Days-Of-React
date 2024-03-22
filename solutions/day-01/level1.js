const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
  ]

//   Declare an empty array
let arr = []

//   Declare an array with more than 5 number of elements
let arr1 = [1, 2, 3, 4, 5, 6]

//   Find the length of your array
console.log(arr1.length)

//   Get the first item, the middle item and the last item of the array
console.log(arr1[0], arr1[arr1.length/2], arr1[arr1.length - 1])

//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = []
mixedDataTypes.push(1)
mixedDataTypes.push(2)
mixedDataTypes.push("adsc")
mixedDataTypes.push('a')
mixedDataTypes.push([1,2,3])
mixedDataTypes.push({2:3, 4:4, 5:1})

console.log(mixedDataTypes.length)

//   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

//   Print the array using console.log()
console.log(itCompanies)

//   Print the number of companies in the array
console.log(itCompanies.length)

//   Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[(itCompanies.length-1)/2], itCompanies[itCompanies.length - 1])

//   Print out each company
for (let i = 0; i < itCompanies.length; i++)
{
  console.log(itCompanies[i])
}

//   Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++)
{
  console.log(itCompanies[i].toUpperCase())
}

//   Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.slice(0, 6).join(', ') + " and " + itCompanies[itCompanies.length - 1] + " are big IT Companies.")

//   Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
comp = "Groww"
if(itCompanies.indexOf(comp) != -1) console.log(`Company ${comp} found at ${itCompanies.indexOf(comp) + 1} position`)
else  console.log(`Company ${comp} not found`)

//   Filter out companies which have more than one 'o' without the filter method
itCompanies.forEach(element => {

});

//   Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)

//   Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

//   Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3))

//   Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length))

//   Slice out the middle IT company or companies from the array
console.log(itCompanies.slice((itCompanies.length-1)/2, (itCompanies.length-1)/2  + 1))

//   Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies)

//   Remove the middle IT company or companies from the array
itCompanies.splice((itCompanies.length-1)/2, 1)
console.log(itCompanies)

//   Remove the last IT company from the array
itCompanies.pop()
console.log(itCompanies)

//   Remove all IT companies
itCompanies = itCompanies.splice()
console.log(itCompanies)