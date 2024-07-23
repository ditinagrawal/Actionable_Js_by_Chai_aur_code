// Activity - 1

const greet = async () => {
    await setTimeout(() => {
        console.log("Hello World");
    }, 3000);
};

greet();

const user = fetch("https://api.github.com/users/ditinagrawal")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
