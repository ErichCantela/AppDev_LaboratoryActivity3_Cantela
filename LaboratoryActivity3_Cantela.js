// LaboratoryActivity3_Cantela.js

// declare base once at the top
const base = 0;

/*Problem 1: Grade Calculator
Write a function calculateGrade(score) that returns the grade based on this rule:
• 90–100: A
• 80–89: B
• 70–79: C
• 60–69: D
• Below 60: F
Use score = base_number × 10 + 5. Example: If base = 7 → score = 75 → Grade = C. */

function calculateGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

const score = base * 10 + 5;

console.log("______________________________________________");
console.log("Problem 1: Grade Calculator");
console.log("Base: " + base);
console.log("Score: " + score);
console.log("Grade: " + calculateGrade(score));
console.log("______________________________________________\n");


/*Problem 2: Star Pattern
Write a function showStars(rows) that prints a triangle of stars using loops.
Rows should be equal to your base number + 2. Example: If base = 4 → rows = 6. */

function showStars(rows) {
    for (let i = 1; i <= rows; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        console.log(stars);
    }
}

const rows = base + 2;
console.log("______________________________________________");
console.log("Problem 2: Star Pattern");
showStars(rows);
console.log("______________________________________________\n");


/*Problem 3: Prime Number Checker
Write a function isPrime(n) that checks if a number is prime.
Check if your base number + 10 is prime. Example: If base = 3 → check 13 → Prime. */

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) { 
        if (n % i === 0) return false;
    }
    return true;
}

const numToCheck = base + 10;
console.log("______________________________________________");
console.log("Problem 3: Prime Number Checker");
if (isPrime(numToCheck)) {
    console.log("Number: " + numToCheck + " → Prime");
} else {
    console.log("Number: " + numToCheck + " → Not Prime");
}
console.log("______________________________________________\n");



/*Problem 4: Multiplication Table
Write a function multiplicationTable(n) that prints the multiplication table of n from 1 to 10.
Use n = base number. Example: If base = 5 → print the multiplication table of 5. */

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

console.log("______________________________________________");
console.log("Problem 4: Multiplication Table");
multiplicationTable(base);
console.log("______________________________________________");
