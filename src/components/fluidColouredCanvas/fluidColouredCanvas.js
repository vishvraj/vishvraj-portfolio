import React, { useEffect } from 'react';
import initFluidCursor from './fluidColoured.js';

const FluidCanvas = () => {
  useEffect(() => {
    initFluidCursor();
  }, []);

  return (
    <canvas
      id="fluid"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none', // ✅ Prevents interfering with clicks
      }}
    />
  );
};

export default FluidCanvas;
