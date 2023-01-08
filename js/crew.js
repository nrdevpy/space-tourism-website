import data from "./fetch.js";

data().then(data => {
    const { crew } = data;
    console.dir(crew[0])
})