import React from "react";
import { extend, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";
import me from "../static/avatar.JPG";

const AvatarShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTexture: new THREE.Texture(),
  },
  // Vertex
  glsl`
    varying vec2 vUv;
    void main()
    {
        vec2 vUv = uv;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment
  glsl`
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main()
    {
        vec3 texture = texture2D(uTexture, vUv).rgb;

        gl_FragColor = vec4(texture, 1.0);
    }
  `
);

extend({ AvatarShaderMaterial });

const AvatarMesh = () => {
  const [image] = useLoader(THREE.TextureLoader, [me]);

  return (
    <mesh>
      <planeBufferGeometry args={[1, 1]} />
      <avatarShaderMaterial uTexture={image} />
    </mesh>
  );
};

export default AvatarMesh;
