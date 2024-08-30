import { motion } from 'framer-motion';
import '../CSS/About.css'
interface AboutInfo {
    title: string;
    name: string;
}



export default function About() {
    const aboutDatas: AboutInfo[] = [
        {
            title: `const Skill(about) => {`,
            name: `High - quality Coding, I am improving code knowledge everyday }`,
        },
        {
            title: `const Skill(about) => {`,
            name: `High - quality Coding, I am improving code knowledge everyday }`,
        },
    ];

    

    return (
        <div id='about' className="bg-black min-h-screen">
            {/* ABOUT INFO SECTION */}
            <div className="flex items-center justify-center gap-10 pt-20">
                {aboutDatas.map((data, index) => (
                    <motion.div
                        key={index}
                        className="container text-center p-4 border border-gray-300 rounded-2xl shadow-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "easeOut" }}
                    >
                        <p className="text-xl text-blue-500 font-mono">{data.title}</p>
                        <h6 className="text-gray-500 text-lg">{data.name}</h6>
                    </motion.div>
                ))}
            </div>

            {/* ABOUT ME SECTION */}
            <div className="text-white mt-32 text-center text-5xl font-bold italic">
                ABOUT ME
            </div>
            <div id='about-text' className="text-gray-400 text-xl pr-48 pl-48 text-center mt-12">
                Hello, I'm Hasan. I'm a 20-year-old web developer. I was born and raised in Izmir. I completed my primary education at Izmir Osman Cinar Primary School, my secondary education at Mustafa Uygur Middle School, and my high school education at Suphi Koyuncuoglu Anatolian High School. My passion for software started here and then I got into Izmir Democracy University, Department of Management and Information Systems and put myself on this path. I am someone who always tries to improve myself in web technologies and is always eager to learn new things. I started with HTML and CSS and now I have reached a position where I can work with various technologies in the frontend and backend section. About eight months into my adventure, my path crossed with <span className='text-red-600'>Mytek Reality</span> and I am currently actively working as a Frontend, I have gained knowledge not only in software but also in areas such as video editing and Photoshop and I continue to learn.      </div>

           

                    
        </div>
    );
}
