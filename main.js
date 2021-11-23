const width = window.screen.width;
const height = window.screen.height; 
const aspect = width / height;
console.log("w: " + width + " h: " + height);
var gradient = ["#000000", "#090909", "#111111", "#171717", "#1c1c1c", "#212121", "#262626", "#2c2c2c", "#313131", "#373737", "#3d3d3d", "#434343", "#484848", "#4e4e4e", "#545454", "#5b5b5b", "#616161", "#676767", "#6d6d6d", "#747474", "#7a7a7a", "#818181", "#878787", "#8e8e8e", "#959595", "#9b9b9b", "#a2a2a2", "#a9a9a9", "#b0b0b0", "#b7b7b7", "#bebebe", "#c5c5c5", "#cccccc", "#d3d3d3", "#dadada", "#e2e2e2", "#e9e9e9", "#f0f0f0", "#f8f8f8", "#ffffff"]
// var gradientStr = "#000000 #050505 #090909 #0d0d0d #111111 #141414 #171717 #191919 #1c1c1c #1e1e1e #212121 #232323 #262626 #282828 #2b2b2b #2e2e2e #303030 #333333 #363636 #393939 #3b3b3b #3e3e3e #414141 #444444 #474747 #4a4a4a #4d4d4d #4f4f4f #525252 #555555 #585858 #5b5b5b #5e5e5e #616161 #646464 #686868 #6b6b6b #6e6e6e #717171 #747474 #7a7a7a #7d7d7d #808080 #848484 #878787 #8a8a8a #8d8d8d #909090 #949494 #979797 #9a9a9a #9e9e9e #a1a1a1 #a4a4a4 #a8a8a8 #ababab #aeaeae #b2b2b2 #b5b5b5 #b9b9b9 #bcbcbc #bfbfbf #c3c3c3 #c6c6c6 #cacaca #cdcdcd #d1d1d1 #d4d4d4 #d8d8d8 #dbdbdb #dfdfdf #e2e2e2 #e6e6e6 #e9e9e9 #ededed #f1f1f1 #f4f4f4 #f8f8f8 #fbfbfb #ffffff"
// gradient = gradientStr.split(" ");

function createGraphics() {
	var screen = document.getElementById("screen");
	var context = screen.getContext("2d");
	screen.setAttribute("width", ""+width);
	screen.setAttribute("height", ""+height);
	
	var light = Vec3.norm(new Vec3(-0.8, 0.3, -1));
	var spherePos = new Vec3(0, 3, 0);
	
	for (i = 0; i < width; i++) {
		for (j = 0; j < height; j++) {
			var uv = new Vec2(i, j).div(new Vec2(width, height)).mult(2.0).diff(1.0);
			uv.x *= aspect;
			var ro = new Vec3(-2, 0, 0);
			var rd = Vec3.norm(new Vec3(1, uv.x, uv.y));
			var color = 0;
			var intersection = sphere(ro, rd, 1); 
			if (intersection.x > 0) {
				//var itPoint = new Vec3(ro.x + rd.x * intersection.x, ro.y + rd.y * intersection.x, ro.z + rd.z * intersection.x)
				var itPoint = ro.add(rd.mult(intersection.x));
				var n = Vec3.norm(itPoint);
				var diff = Vec3.dot(n, light);
				color = Math.round(diff * 20);
				}
			if (color < 0) {
				color = 0;
			} else if (color > gradient.length - 2) {
				color = gradient.length - 2;
			}
			context.fillStyle = gradient[color];
			context.fillRect(i, j, 1, 1);
		}
	}
}

// function raymarch(ro, rd) {

// } 

// function getDist() {

// }

// function sphere(sx, sy, sz, sr, ro) {
// 	return (new Vec3(ro.x - sx, ro.y - sy, ro.z - sz).length() - sr);
// }

function sphere(ro, rd, r) {
	var b = Vec3.dot(ro, rd);
	var c = Vec3.dot(ro, ro) - r * r;
	var h = b * b - c;
	if (h < 0) return [-1, -1];
	h = Math.sqrt(h);
	return new Vec2(-b - h, -b + h);

}
