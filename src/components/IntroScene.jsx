import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "motion/react";
import './styles/IntroScene.css'

export function IntroScene({onEnter})
{
return(
    <div className="container">
        {/* creación de la vía láctea*/}
        <Canvas
            camera={{position: [0, 0, 4]}}
            style={{
                position: "absolute",
                inset: 0,
            }}
        >
            <ambientLight intensity={0.2}/>
            <Stars
                radius={50}
                depth={10}
                count={3000}
                factor={4}
                saturation={0}
                fade
            />
        </Canvas>
    </div>
);
}