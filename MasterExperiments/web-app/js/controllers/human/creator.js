var canvas, created=false, bodies=[];

function createEnvironment(){
	canvas = new Kinetic.Stage({
		container: 'canvas-container',
		width: $(window).width(),
		height: 800
	});
}

$(document).ready(function() {
	if (!created) {
		createEnvironment();
		created = true;
	}
	
	var body = new Body();
	bodies.push(body);
	var structure = createStructure(body, new EllipseDimension(20, 100, 50));
	canvas.add(structure);
	
	$("#action").click(function(){
		
	});
});
