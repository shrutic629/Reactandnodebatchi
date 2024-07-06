// 4. Create an object named `restaurant` with at least 5 keys (e.g., 
// `restaurantId`, `name`, `cuisine`, `rating`, `reviews`). One of the keys 
// should have an array as its value. Then, create a function that accepts 
// this object in a destructured format, prints all the information, and 
// calls another function that will pass the key array into another function.
//  Additionally, call a function that will pass the object as a key into 
// another function and print all the keys.


const restaurant = {
    restaurantId: 141,
    name: "Cafe Bae",
    cuisine: ["Indian","Italian","Mexican","Labanese"],
    rating: "5star",
    reviews: "excellent"
}

function display(cuisine)
{
    console.log(cuisine);
}

function cafedetails({restaurantId, name, cuisine, rating, reviews})
{
    console.log(restaurantId);
    console.log(name);
    console.log(cuisine);
    console.log(rating);
    console.log(reviews);

    display(cuisine);
}

function print(restaurant)
{
    console.log(restaurant.restaurantId);
    console.log(restaurant.name);
    console.log(restaurant.cuisine);
    console.log(restaurant.rating);
    console.log(restaurant.reviews);
}

cafedetails(restaurant);
print(restaurant);