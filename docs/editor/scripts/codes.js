var CODES = {
//hello
"Hello" : `/*
Neche UrduScript likhen.
Code chalane k liye Run pe click karen.
*/

likho("Salam, Dunya")
`,
// var
"Variable": `// declare variable
rakho naam = "Ali"

// output to screen
likho(naam)
`,

// foreach
"ForEach": `// variable
rakho list = ["Ahmed", "Sara", "Qasim"]

// foreach loop. Iterate over 'list' array
har list k naam per{
  // output to screen
  likho(naam)
}
`,

// if-else
"If-Else": `// declare variable
rakho naam = "Asad"

// if else
agar (naam){
  likho("Salam, " + naam)
}
warna {
  likho("Naam khali hai")
}
`,

// prompt
"Prompt/GetLine": `//prompt: ask for input from user
rakho naam = pucho("Apna naam likhen")

// if else
agar (naam){
  likho("Salam, " + naam)
}
warna {
  likho("Naam khali hai")
}
`,

// function
"Function": `// function is 'kaam'
kaam salaam(naam){
	agar (naam){
    likho("Salam, " + naam)
  }
  warna {
    likho("Naam khali hai")
  }
}

// calling function
salaam("Asad")
`,

"While": `// declare a variable
rakho a = 10

// while is 'jabtak'
jabtak( a>0 ){
	likho(a)
	a--
}
`,
"Do-While":`// ask age until given
karo{
  age = pucho("Apni age likhen")
}
jabtak(!age)
likho("Apki age " + age + " hai")
`,
"Recursion(Fibonacci)": `// recursive function
kaam fibonacci(num) {
	// base case
  agar (num <= 1) bhejo 1;
	
	// recursion
  bhejo fibonacci(num - 1) + fibonacci(num - 2);
}

likho(fibonacci(5))
`

}