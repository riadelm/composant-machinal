const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  vec4 screenSpacePosition = vec4(position.xy, 0.0, 1.0);
  gl_Position = screenSpacePosition;
}
`;
export default vertexShader;