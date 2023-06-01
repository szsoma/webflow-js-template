import p5 from 'p5';

function p5Dots() 
{
    // CONSTANTS
    const NUM_CIRCLES = 16;
    const FLOAT_SPEED = 1;
    const TRANSITION_SPEED = 0.05;
    const CIRCLE_SIZE_DIVISOR = 40;

    // VARIABLES
    let circles = [];
    let float = true;
    let circleSize;

    function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.style("display", "block");
    cnv.style("position", "absolute");
    cnv.style("inset", 0);
    cnv.style("z-index", 1100);
    noStroke();

    // Create and initialize circle objects with position and speed
    for (let i = 0; i < NUM_CIRCLES; i++) {
        circleSize = width / CIRCLE_SIZE_DIVISOR;
        let circle = {
        x: random(circleSize / 2, width - circleSize / 2),
        y: random(circleSize / 2, height - circleSize / 2),
        speedX: random(-FLOAT_SPEED, FLOAT_SPEED),
        speedY: random(-FLOAT_SPEED, FLOAT_SPEED),
        targetX: null,
        targetY: null,
        };
        circles.push(circle);
    }
    }

    function draw() {
    // Clear the background each frame
    background(30);

    // Update and draw each circle in the array
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        if (float) {
        // Update the circle's position based on its speed
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Check for collisions with the edges and reverse speed if necessary
        if (circle.x < 0 + circleSize / 2 || circle.x > width - circleSize / 2) {
            circle.speedX = -circle.speedX;
        }
        if (circle.y < 0 + circleSize / 2 || circle.y > height - circleSize / 2) {
            circle.speedY = -circle.speedY;
        }
        } else {
        // calculate spacing we need for circles
        let spacing = width / NUM_CIRCLES;

        // Set target positions for the lined-up state
        circle.targetX = i * spacing + circleSize * 0.75;
        circle.targetY = height / 2;

        // Animate the transition to the target positions using lerp
        circle.x = lerp(circle.x, circle.targetX, TRANSITION_SPEED);
        circle.y = lerp(circle.y, circle.targetY, TRANSITION_SPEED);
        }

        // Draw the circle at the updated position
        ellipse(circle.x, circle.y, circleSize, circleSize);
    }
    }

    function mouseWheel() {
    float = false;
    }

    function mouseClicked() {
    float = !float;
    }

    function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    circleSize = width / CIRCLE_SIZE_DIVISOR;
    }
}

export default p5Dots
