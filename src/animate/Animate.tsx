import { motion } from 'framer-motion';

// ANIMATE INTERFACE
interface AnimateProps {
    type: 'scroll' | 'fade';
}

// ANIMATE DEFINING
export default function Animate({ type }: AnimateProps) {
    const animations = {
        scroll: {
            x: [-100, 100, -100],
            transition: {
                duration: 6,
                repeat: 1,  
                repeatType: "loop",
            },
        },
        fade: {
            opacity: [0, 1, 0],
            transition: {
                duration: 2,
                repeat: 1,  
                repeatType: "loop",
            },
        },
    };

    return (
        <motion.div
            className="inline-block"
            animate={animations[type]}
        >
            <div className='flex justify-start flex-col'>
                <p className="text-blue-300 text-7xl font-black">Hi, It's Hasan Belen</p>
            </div>
        </motion.div>
    );
}
