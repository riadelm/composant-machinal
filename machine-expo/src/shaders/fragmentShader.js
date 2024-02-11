const fragmentShader = `
precision mediump float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

varying vec2 vUv;

// Define a maximum number of points and a highlight duration
const int MAX_POINTS = 50;
const float HIGHLIGHT_DURATION = 5.0;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

// Function to generate a point position
vec2 generatePoint(int index, float t) {
	float angle = 3.14159265 * 2.0 * float(index) / float(MAX_POINTS);
    float radius = 0.01 + 0.7 * sin(float(index) * 1.7 + t * 0.4);
    vec2 position = vec2(sin(angle), cos(angle)) * radius;
    position += vec2(sin(t * 0.1 + float(index)), cos(t * 0.1 + float(index))) * 0.1;
    position = clamp(position, -0.9, 0.9);
    return position;
}

vec3 image(vec2 st, float t) {
    vec3 color = vec3(1.0); // Start with a gray background
    float minDist = 2.0;
    vec2 nearestPoint;
    float nearestDist = 10000.0; // Start with a large initial value

    int currentPoints = min(int(t / 2.0), MAX_POINTS); // Current number of points based on time

    for(int i = 0; i < MAX_POINTS; ++i) {
        if(i < currentPoints) {
            vec2 point = generatePoint(i, t);
            // Calculate a pseudo-random phase offset for each point
            float dist = distance(st, point); // Apply size modulation

            if(dist < nearestDist) {
                nearestDist = dist;
                nearestPoint = point;
            }
            minDist = min(minDist, dist);
        }
    }

    // Color adjustment for the nearest point or default coloring
    if(nearestDist < 0.1 && distance(mouse, nearestPoint) < 0.1) {
        color = vec3(0.0, 1.0, 0.0); // Primary green for nearest point to mouse
    } else {
        color = mix(color, vec3(0.3, 0.28, 0.3), smoothstep(0.0, 0.15, minDist));
    }

    return color;
}

void main() {
    float aspectRatio = resolution.x / resolution.y;
    vec2 uv = (vUv - 0.5) * vec2(aspectRatio, 1.0);
    vec2 pos = uv * 1.5;
    gl_FragColor = vec4(image(pos, time), 1.0);
}
`;
export default fragmentShader;