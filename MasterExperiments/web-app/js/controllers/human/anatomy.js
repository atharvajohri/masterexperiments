function createStructure(body, headDimension){
	var structure = new Kinetic.Layer();
	var head = new Kinetic.Ellipse({
		x: headDimension.x,
		y: headDimension.y,
		radius: {
			x: headDimension.width,
			y: headDimension.height
		},
		stroke: 'black',
		strokeWidth: 2
	});
	
	var neck = new Kinetic.Line({
		points: [
		         {x:(headDimension.x), y:(headDimension.y+headDimension.height)},
		         {x:(headDimension.x), y:(headDimension.y+headDimension.height+headDimension.height/2)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	var chest = new Kinetic.Ellipse({
		x: headDimension.x,
		y: neck.getPoints()[1].y+headDimension.width,
		radius: {
			x: headDimension.width,
			y: 2*headDimension.height
		},
		stroke: 'black',
		strokeWidth: 2,
		rotationDeg: 90
	});
	
	var torso = new Kinetic.Line({
		points: [
		         {x:(headDimension.x), y:neck.getPoints()[1].y},
		         {x:(headDimension.x), y:(neck.getPoints()[1].y+4*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	var joint = headDimension.jointOptions;
	joint.x = headDimension.x - 2*headDimension.height; 
	joint.y = neck.getPoints()[1].y+headDimension.height/1.25;
	var shoulderL = new Kinetic.Circle(joint);
	
	joint.x = headDimension.x + 2*headDimension.height; 
	joint.y = neck.getPoints()[1].y+headDimension.height/1.25;
	var shoulderR = new Kinetic.Circle(joint);
	
	var armL = new Kinetic.Line({
		points: [
		         {x:(shoulderL.getX()), y:shoulderL.getY()},
		         {x:(shoulderL.getX()), y:(shoulderL.getY() + 2.5*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	var armR = new Kinetic.Line({
		points: [
		         {x:(shoulderR.getX()), y:shoulderR.getY()},
		         {x:(shoulderR.getX()), y:(shoulderR.getY() + 2.5*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	joint.x = armR.getPoints()[1].x; 
	joint.y = armR.getPoints()[1].y;
	var elbowR = new Kinetic.Circle(joint);
	
	joint.x = armL.getPoints()[1].x; 
	joint.y = armL.getPoints()[1].y;
	var elbowL = new Kinetic.Circle(joint);
	
	var foreArmL = new Kinetic.Line({
		points: [
		         {x:(elbowL.getX()), y:elbowL.getY()},
		         {x:(elbowL.getX()), y:(elbowL.getY() + 2.5*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	var foreArmR = new Kinetic.Line({
		points: [
		         {x:(elbowR.getX()), y:elbowR.getY()},
		         {x:(elbowR.getX()), y:(elbowR.getY() + 2.5*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	joint.x = foreArmR.getPoints()[1].x; 
	joint.y = foreArmR.getPoints()[1].y;
	var wristR = new Kinetic.Circle(joint);
	
	joint.x = foreArmL.getPoints()[1].x; 
	joint.y = foreArmL.getPoints()[1].y;
	var wristL = new Kinetic.Circle(joint);
	
	var crotchV = new Kinetic.Ellipse({
		x: headDimension.x,
		y: torso.getPoints()[1].y+headDimension.height,
		radius: {
			x: headDimension.width,
			y: headDimension.height
		},
		stroke: '#888',
		strokeWidth: 2
	});
	
	var crotchH = new Kinetic.Ellipse({
		x: headDimension.x,
		y: torso.getPoints()[1].y+headDimension.width,
		radius: {
			x: headDimension.width,
			y: 1.5*headDimension.height
		},
		stroke: 'black',
		strokeWidth: 2,
		rotationDeg:90
	});
	
	joint.x = crotchH.getX() - 1.75*crotchH.getRadius().x; 
	joint.y = crotchH.getY() + crotchH.getRadius().x/2;
	var hipR = new Kinetic.Circle(joint);
	
	joint.x = crotchH.getX() + 1.75*crotchH.getRadius().x; 
	joint.y = crotchH.getY() + crotchH.getRadius().x/2;
	var hipL = new Kinetic.Circle(joint);
	
	var thighL = new Kinetic.Line({
		points: [
		         {x:(hipL.getX()), y:(hipL.getY())},
		         {x:(hipL.getX()-headDimension.width/2), y:(hipL.getY() + 4*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	var thighR = new Kinetic.Line({
		points: [
		         {x:(hipR.getX()), y:(hipR.getY())},
		         {x:(hipR.getX()+headDimension.width/2), y:(hipR.getY() + 4*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	joint.x = thighL.getPoints()[1].x; 
	joint.y = thighL.getPoints()[1].y;
	var kneeL = new Kinetic.Circle(joint);
	
	joint.x = thighR.getPoints()[1].x; 
	joint.y = thighR.getPoints()[1].y;
	var kneeR = new Kinetic.Circle(joint);
	
	var legL = new Kinetic.Line({
		points: [
		         {x:(kneeL.getX()), y:(kneeL.getY())},
		         {x:(kneeL.getX()), y:(kneeL.getY() + 4*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	var legR = new Kinetic.Line({
		points: [
		         {x:(kneeR.getX()), y:(kneeR.getY())},
		         {x:(kneeR.getX()), y:(kneeR.getY() + 4*headDimension.height)}
		         ],
		stroke: 'black',
		strokeWidth: 2
	});
	
	joint.x = legL.getPoints()[1].x; 
	joint.y = legL.getPoints()[1].y;
	var ankleL = new Kinetic.Circle(joint);
	
	joint.x = legR.getPoints()[1].x; 
	joint.y = legR.getPoints()[1].y;
	var ankleR = new Kinetic.Circle(joint);
	
	structure.add(head); body.head = head;
	structure.add(neck); body.neck = neck;

	structure.add(chest); body.chest = chest;
	structure.add(torso); body.torso = torso;
	
	var shoulders = new Array();
	structure.add(shoulderL); shoulders.push(shoulderL);
	structure.add(shoulderR); shoulders.push(shoulderR);
	body.shoulders = shoulders;
	
	var arms = new Array();
	structure.add(armL); arms.push(armL);
	structure.add(armR); arms.push(armR);
	body.arms = arms;
	
	var elbows = new Array();
	structure.add(elbowL); elbows.push(elbowL);
	structure.add(elbowR); elbows.push(elbowR);
	body.elbows = elbows;
	
	var foreArms = new Array();
	structure.add(foreArmL); foreArms.push(foreArmL);
	structure.add(foreArmR); foreArms.push(foreArmR);
	body.foreArms = foreArms;
	
	var wrists = new Array();
	structure.add(wristL); wrists.push(wristL);
	structure.add(wristR); wrists.push(wristR);
	body.wrists = wrists;
	
	structure.add(crotchH); body.crotch = crotchH;
	
	var hips = new Array();
	structure.add(hipR); hips.push(hipR);
	structure.add(hipL); hips.push(hipL);
	body.hips = hips;
	
	var thighs = new Array();
	structure.add(thighL); thighs.push(thighL);
	structure.add(thighR); thighs.push(thighR);
	body.thighs = thighs;
	
	var knees = new Array();
	structure.add(kneeL); knees.push(kneeL);
	structure.add(kneeR); knees.push(kneeR);
	body.knees = knees;
	
	var legs = new Array();
	structure.add(legL); legs.push(legL);
	structure.add(legR); legs.push(legR);
	body.legs = legs;
	
	var ankles = new Array();
	structure.add(ankleL); ankles.push(ankleL);
	structure.add(ankleR); ankles.push(ankleR);
	body.ankles = ankles;
	
	return structure;
}