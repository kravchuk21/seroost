console.log("Querying /api/search");

fetch("/api/search", {
    method: 'POST',
    headers: {
        'Content-Type': 'text/plain'
    },
    body: "bind texture, to buffer."
}).then(response => {
    console.log(response);
})