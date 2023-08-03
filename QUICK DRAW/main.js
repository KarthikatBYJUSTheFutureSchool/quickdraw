// Quick Draw Data Set (example data)
const quick_draw_data_set = [
    "apple",
    "banana",
    "cat",
    "dog",
    "elephant",
    // Add more sketch names here...
];

/
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

const random_number = getRandomNumber(quick_draw_data_set.length);


console.log("Random Sketch Name:", quick_draw_data_set[random_number]);


const sketch = quick_draw_data_set[random_number];


const sketchNameSpan = document.getElementById("sketchName");
sketchNameSpan.textContent = "Sketch To be Drawn: " + sketch;
