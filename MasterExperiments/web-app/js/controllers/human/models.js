function Body(head, neck, chest, torso, shoulders, arms, elbows, foreArms, wrists, crotch, hips, thighs, knees, legs, ankles){
	this.head = head;
	this.neck = neck; 
	this.chest = torso; 
	this.shoulders = shoulders; 
	this.arms = arms; 
	this.elbows = elbows;
	this.foreArms = foreArms; 
	this.wrists = wrists; 
	this.crotch = crotch; 
	this.hips = hips;
	this.thighs = thighs;
	this.knees = knees;
	this.legs = legs;
	this.ankles = ankles;
}


function CircleDimension(size){
	this.radius = size;
}

function EllipseDimension(size, left, top){
	this.width = size;
	this.height = 1.25*size;
	this.x = left ? left : $(window).width()/2;
	this.y = top;
	
	this.jointOptions = {
		radius: size/5,
		fill: 'red',
		stroke: 'black',
	    strokeWidth: 2
	}
}

function Point(x, y){
	this.x = x;
	this.y = y;
}