// async function get() {
//     const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const data = await response.json();
//     console.log(data);
// }

// get();

// async function post() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//             userId: 1,
//             title: "지브리 영화 대개봉!",
//             body: "꼭 보러가야지!",
//         }),
//     });
//     const data = await response.json();
//     console.log(data);
// }

// post();

import axios from "axios";

// async function get() {
//     const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     console.log(response.data);
// }

// get();

async function post() {
    const res = await axios.post(
        "https://jsonplaceholder.typicode.com/posts/",
        {
            userId: 1,
            title: "지브리 영화 대개봉!",
            body: "꼭 보러가야지!",
        }
    );
    console.log(res.data);
}

post();
