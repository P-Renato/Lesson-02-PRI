/*
Defiining class Creature
This class will define basic features of our creatures
This class will implement 2 interfaces (a class can implement 1 or more interfaces
- Movement
- Drawable
*/
class Creature {
    /*
    Now we create a constructor and set all props above as constructor parameters.
    We will not set "letter: string". We will apply a default value for it.
    */
    constructor(positionX, positionY, movement) {
        this.positionX = positionX;
        this.positionY = positionY;
        this.movement = movement;
        this.letter = "?"; // default value as fallback in case we do not provide any string 
    }
    // Since our class implements Movable and Drawable we need to have "move" and "draw"
    move(canvas) {
        // Here we need to define what "move" needs to do
        if (this.positionY < canvas.height - 1) {
            this.positionY += this.movement.vertical;
        }
        else if (this.positionY > canvas.height - 1) {
            this.positionY = canvas.height - 1;
        }
        if (this.positionX > canvas.width - 40) {
            this.movement.horizontal *= -1;
            this.positionX = canvas.width - 41;
        }
        else if (this.positionX < 40) {
            this.movement.horizontal *= -1;
            this.positionX = 41;
        }
        this.positionX += this.movement.horizontal;
    }
    draw(canvasContext) {
        /*
        Draws letters on the canvas "dog" "cat"
        fillText is a built in method to draw text on a canvas at the specified coordinates.
        */
        canvasContext.fillText(this.letter, this.positionX, this.positionY);
    }
}
/*
We have to create animals based on class Creature.
That means I need a class for Cat and 1 for Dog

Inheritance allows for the creation of child classes based on a a parent class
Child classes inherit props and methods from the parent class

This approach keeps the code clean, organized and easy to expand.

Cat and Dog will be SPECIALIZED versions of Creature.
They inherit all the features (position, movement, label, and actions) from Creature.
They also add customazition.
*/
// How do we let a class inherit from another one? With a magic words "extends"
class Cat extends Creature {
    // Extends means that Cat will inherit all properties and methods from Creature class
    constructor(positionX, positionY) {
        /*
        Cats moves randomly with a horizontal speed between 0 and 5
        and a vertical speed of 0.3
        Its label is "Cat"

        */
        // Define the movement object based on type Movement
        const catMovement = {
            horizontal: Math.random() * 5, // random value
            vertical: 0.3 // hardcoded
        };
        super(positionX, positionY, catMovement);
        // For the text to display
        this.letter = "Cat"; // We can do this because we are inherinting all props and methods from Creature class
    }
}
class Dog extends Creature {
    constructor(positionX, positionY) {
        const dogMovement = {
            horizontal: Math.random() * 2,
            vertical: 2
        };
        super(positionX, positionY, dogMovement);
        this.letter = "Dog";
    }
}
export { Cat, Dog };
