// console.log('hello');

// ***Challenge 1: Add 2 Numbers***
function addNumbers(num1, num2) {
    return num1 + num2;
}

// console.log(addNumbers(2, 5));
// console.log(addNumbers(5, 5));
// console.log(addNumbers(15, 5));


// ***Challenge 2: Convert Minutes to Seconds***
function convertMinutesToSeconds(minutes) {
    return minutes * 60;
}

// console.log(convertMinutesToSeconds(1));
// console.log(convertMinutesToSeconds(3));


// ***Challenge 3: Your Age in Seconds***
function yourAgeInSeconds(age) {
    // years * months (12) * days (30) * hours (24) * minutes (60) * seconds (60)
    return age * 12 * 30 * 24 * 60 * 60;
}

// console.log(yourAgeInSeconds(25));


// ***Challenge 4: First Item in an Array***
function getFirstItem(items) {
    return items[0];
}

let items = [
    'banana', 'godfather', 'shawshank', 'pickle'
];

// console.log(getFirstItem(items));


// ***Challenge 5: Label Good Movies & Bad Movies***
// Less than or equal to 7?
// Bad movies, good movies
// Put them in 2 different buckets

function badOrGoodMovie(movie_rating) {
    // badOrGoodMovie(6) -> "bad"
    // badOrGoodMovie(7) -> "good"
    // badOrGoodMovie(9.2) -> "good"
    // badOrGoodMovie(2) -> "bad"
    let movie_result;

    if (movie_rating >= 7) {
        movie_result = 'Good movie';
    } else {
        movie_result = 'Bad movie';
    }

    return movie_result;
}

// console.log(badOrGoodMovie(6)); // bad
// console.log(badOrGoodMovie(7)); // good
// console.log(badOrGoodMovie(9.2)); // good
// console.log(badOrGoodMovie(2)); // bad


// ***Challenge 6: Check if a string is empty***
function isEmptyString(some_string) {
    // isEmptyString("") -> True
    // isEmptyString("The Godfather") -> False
    if (some_string == "") {
        return true;
    } else {
        return false;
    }
}

// console.log(isEmptyString(""));
// console.log(isEmptyString("The Godfather"));


// ***Challenge 7: Finding the Minimum***
let numbers_2 = [5, 2, 9, 8, 7, 3];

function findMin(numbers_2) {
    // findMin([5, 2, 9, 8, 7, 3]) -> 2
    // findMin([5, 8, 9, 8, 7, 3]) -> 3
    // for loops
    let minimum = numbers_2[0];
    for (let i = 0; i < numbers_2.length; i++) {
        if (numbers_2[i] < minimum) {
            minimum = numbers_2[i];
        }
    }
    return minimum;
}

// console.log(findMin([5, 2, 9, 8, 7, 3]));
// console.log(findMin([5, 8, 9, 8, 7, 3]));


// ***Challenge 8: Finding the Maximum***
let numbers1 = [5, 2, 9, 8, 7, 3];

function findMax(numbers_1) {
    // findMax([5, 2, 9, 8, 7, 3, 13]) -> 13
    // findMax([5, 8, 9, 8, 7, 3]) -> 9
    // for loops
    let maximum = numbers_1[0];
    for (let i = 0; i < numbers_1.length; i++) {
        if (numbers_1[i] > maximum) {
            maximum = numbers_1[i];
        }
    }
    return maximum;
}

// console.log(findMax([5, 2, 9, 8, 7, 3, 13]));
// console.log(findMax([5, 8, 9, 8, 7, 3]));


// ***Challenge 9: Sort by Biggest Numbers
function sortBestRatingsFirst(numbers) {
    // Run length - 1
    // Start loop at index 1
    // Find max from remaining list
    // Find new max & know its location
    // sortBestRatingsFirst([5, 8, 2, 9, 3, 10])

    // find max
    let max_num = numbers[0];
    let max_location;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max_num) {
            // Know max & its index location
            max_num = numbers[i];
            max_location = i;
        }
        return [max_num, max_location];
    }
}

console.log(sortBestRatingsFirst([5, 8, 2, 9, 3, 10]));