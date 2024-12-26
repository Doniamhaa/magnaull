class CanvasDrawer {
  constructor(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
      throw new Error(`Canvas element with id ${canvasId} not found`);
    }
    this._context = canvas.getContext('2d');
    this._x2 = 100; // Example x-coordinate
    this._y2 = 100; // Example y-coordinate
  }

  drawLineTo(x, y) {
    this._context.beginPath();
    this._context.moveTo(this._x2, this._y2); // Move to the starting point (100, 100)
    this._context.lineTo(x, y); // Draw a line to the specified coordinates
    this._context.stroke(); // Render the line
    this._x2 = x; // Update the current position
    this._y2 = y; // Update the current position
  }
}

// Usage
const drawer = new CanvasDrawer('myCanvas');
drawer.drawLineTo(200, 200); // Draws a line from (100, 100) to (200, 200)
