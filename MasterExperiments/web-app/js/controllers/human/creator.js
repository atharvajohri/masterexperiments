var canvas, created=false, headDimension;

function EllipseDimension(size, top){
	this.width = size;
	this.height = 1.25*size;
	this.x = $(window).width()/2;
	this.y = top;
}

function Point(x, y){
	this.x = x;
	this.y = y;
}

function createEnvironment(){
	canvas = new Kinetic.Stage({
		container: 'canvas-container',
		width: $(window).width(),
		height: $(window).height()
	});
	
	var structure = new Kinetic.Layer();
	
	var head = new Kinetic.Ellipse({
		x: canvas.getWidth() / 2,
		y: headDimension.y,
		radius: {
			x: headDimension.width,
			y: headDimension.height
		},
		stroke: 'black',
		strokeWidth: 2
     });
	
	var neck = new Kinetic.Line({
		points: [{x:(),},{}],
		stroke: 'black',
		strokeWidth: 2
	});
	
	structure.add(head);
	canvas.add(structure);
}

$(document).ready(function() {
	headDimension = new EllipseDimension(30, 100);
	if (!created) {
		createEnvironment();
		created = true;
	}
})
