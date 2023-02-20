// Create Point interface
interface Point {
    x: number;
    y: number;
}
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 100 });

// create UserInterface, Which will not allowed members defined outside the interface.
interface UserInterface {
    name: string;
    password: string;
}

let user: UserInterface = {
    name: "",
    password: "" //error property password is missing
};

user.name = 'George Chakama';
console.log(user.name);
// Done