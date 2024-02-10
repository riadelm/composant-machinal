const fragmentShader = `
precision mediump float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

varying vec2 vUv;

vec2 pointA = vec2(0.1,0.3);
vec2 pointB = vec2(-0.2,0.7);
vec2 pointC = vec2(-0.8,-0.2);
vec2 pointD = vec2(0.5,-0.7);



vec3 image(vec2 st)
{
	vec2 point[5];
	point[0] = pointA * sin(time * 0.43) * 0.53;
	point[1] = pointB * sin(-time * 0.85) * 0.63;
	point[2] = pointC * cos(time * -0.32 + cos(time*0.84)) * 0.73;
	point[3] = pointD * sin(time * 0.52) * cos(time * 0.21);
	point[4] = vec2(0.6) * sin(time * 0.3 + cos(time * 0.34));	

	float minDist = 1.0;
	for(int i = 0;i < 5;++i)
	{
		minDist = min(minDist,distance(st,point[i]));
	}
	
	vec3 color = vec3(0.5);
	color += minDist;
	return color;
}

void main() {

	// Calculate aspect ratio
    float aspectRatio = resolution.x / resolution.y;

    // Adjust UV coordinates based on aspect ratio
    vec2 uv = vUv - 0.5;
    uv.x *= aspectRatio;

    // Adjusted position calculation
    vec2 pos = uv * 3.0; // Example adjustment for aspect ratio
	
	gl_FragColor = vec4(image(pos),0.8);
}
`;
export default fragmentShader;