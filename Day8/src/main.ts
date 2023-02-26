console.log(greetNamed("John"));
console.log(greetNamed(name: string = "John"));

function greetNamed(name: string): string {
    if (name) {
        return "Hi! " + name;
    }
}

var greetUnnamed = function (name: string): string {
    if (name) {
        return "Hi! " + name;
    }
}