class Vec3 {
	x;
	y;
	z;

	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	length() { return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z); }
	add(a) { 
		if (a instanceof Vec3) return new Vec3(this.x + a.x, this.y + a.y, this.z + a.z);
		else return new Vec3(this.x + a, this.y + a, this.z + a);
	} 
	diff(a) {
		if (a instanceof Vec3) return new Vec3(this.x - a.x, this.y - a.y, this.z - a.z);
		else return new Vec3(this.x - a, this.y - a, this.z - a);
	}
	mult(a) {
		if (a instanceof Vec3) return new Vec3(this.x * a.x, this.y * a.y, this.z * a.z);
		else return new Vec3(this.x * a, this.y * a, this.z * a);
	}
	div(a) {
		if (a instanceof Vec3) return new Vec3(this.x / a.x, this.y / a.y, this.z / a.z);
		else return new Vec3(this.x / a, this.y / a, this.z / a);
	}

	static neg(a) { return new Vec3(-a.x, -a.y, -a.z); }
	static norm(v3) { return new Vec3(v3.x / v3.length(), v3.y / v3.length(), v3.z / v3.length()); }
	static dot(a, b) { return (a.x * b.x + a.y * b.y + a.z * b.z); }
	static abs(a) { return new Vec3(Math.abs(a.x), Math.abs(a.y), Math.abs(a.z)); }
}
