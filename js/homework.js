console.log("Hello world!");

console.log('This is the homework');


// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended

function createAdder(x){
    function add(y){
        return x + y
    }
    return add;
};

const addEight = createAdder(8);
console.log(addEight(10)); // 18
console.log(addEight(17)); // 25
console.log(addEight(50)); // 58
console.log(addEight(100)); // 108
console.log(addEight(92)); // 100

// function createAdder(x){
//     function addThree(y){
//         return x + y
//     }
//     return addThree;
// }

const addThree = createAdder(3);
console.log(addThree(10)); // 13
console.log(addThree(17)); // 20
console.log(addThree(50)); // 53
console.log(addThree(100)); // 103
console.log(addThree(92)); // 95


// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}


// option 1
function printMovieInfo(movieTitle){
    getMovieInfo(movieTitle)
        .then(movie => {
            console.log(`${movie.title} directed by ${movie.director}. A story of ${movie.description} that runs for ${movie.runtime} minutes.`)
        })
        .catch(err => {
            console.warn(err)
        })
};


// option 2
async function printMovieInfo(movieName){
    try{
        let movie = await getMovieInfo(movieName);
        console.log(`${movieName} directed by ${movie.director}. A story of ${movie.description} that runs for ${movie.runtime} minutes.`)
    }
    catch(error){
        console.warn(error);
    }
};


// Example 1
printMovieInfo('Indiana Jones and the Dark Knight')
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
printMovieInfo('ET')
// Output: *Warning* ET cannot be accessed because it it too short