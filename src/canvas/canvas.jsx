import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

const CanvasCompo = ({ children }) => {
  return (
    <Canvas dpr={[1, 2]} camera={{ fov: 20, position: [0, 0, 5] }}>
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default CanvasCompo;
