class Vec2 {
	x;
	y;

	constructor(x, y) {
		this.x = x || 0;
		this.y = y || 0;
	}

	length() {return Math.sqrt(this.x*this.x+this.y*this.y)}

	add(a) {
		if (a instanceof Vec2) return new Vec2(this.x + a.x, this.y + a.y);
		else return new Vec2(this.x + a, this.y + a);
	}
	diff(a) {
		if (a instanceof Vec2) return new Vec2(this.x - a.x, this.y - a.y);
		else return new Vec2(this.x - a, this.y - a);
	}
	mult(a, b) { 
		if (a instanceof Vec2) return new Vec2(this.x * a.x, this.y * a.y);
		else return new Vec2(this.x * a, this.y * a);
	}
	div(a, b) { 
		if (a instanceof Vec2) return new Vec2(this.x / a.x, this.y / a.y);
		else return new Vec2(this.x / a, this.y / a);
	}
}

