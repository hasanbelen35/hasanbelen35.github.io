import { motion } from 'framer-motion';


interface SliderItem {
    item: string;
}
const Skills = () => {
    const sliderItems: SliderItem[] = [
        { item: "HTML" },
        { item: "CSS" },
        { item: "JAVASCRIPT" },
        { item: "BOOTSTRAP" },
        { item: "TAILWIND" },
        { item: "REACT" },
        { item: "REDUX" },
        { item: "NEXTJS" },
        { item: "EXPRESS.JS" },
        { item: "NODEJS" },
        { item: "MONGODB" },
        { item: "SUPABASE" },
        { item: "FIREBASE" },
    ];
    return (
        <div>

            <div id='skill' className="bg-black pb-64">
                <div className="text-white text-center text-4xl mb-8 italic font-extrabold ">SKILLS</div>

                <div className="slider-container overflow-hidden whitespace-nowrap text-white border rounded-xl ">

                    <motion.div
                        className="slider-content flex"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ repeat: Infinity, duration: 15, ease: "linear" }} // Hız ayarlandı
                    >
                        {sliderItems.map((item, index) => (
                            <div
                                key={index}
                                className="slider-item px-8 text-3xl font-bold"
                            >
                                {item.item}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            {/* SLIDER SECTION */}

        </div>
    )
}

export default Skills
