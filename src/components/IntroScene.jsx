import { Canvas } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';
import { Stars } from '@react-three/drei';


export function IntroScene({ onEnter }) {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 6]}}>
        <ambientLight intensity={0.3} />
        <Stars
          radius={50}       // radio desde el centro
          depth={10}        // profundidad de la nube de estrellas
          count={10000}      // número total de estrellas
          factor={4}        // tamaño de las estrellas
          saturation={0}    // 0 = blanco
          fade               // efecto de desvanecimiento
          speed={0.5}       // velocidad de movimiento
        />
      </Canvas>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            zIndex: 3,
            pointerEvents: 'auto',
            padding: 24
          }}
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: 42, marginBottom: 12 }}
          >
            Bienvenido a la Vía Láctea
          </motion.h1>

          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            transition={{ delay: 0.35 }}
            style={{ marginBottom: 24 }}
          >
            Explora el sistema solar en 3D. Haz clic en Entrar para comenzar tu viaje.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            onClick={onEnter}
            style={{
              padding: '12px 26px',
              fontSize: 18,
              borderRadius: 999,
              border: 'none',
              cursor: 'pointer',
              background: 'linear-gradient(90deg,#06d700,#2ad0ff)',
              color: '#012',
              fontWeight: 700,
              boxShadow: '0 6px 18px rgba(2, 140, 160, 0.18)'
            }}
          >
            Entrar
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}