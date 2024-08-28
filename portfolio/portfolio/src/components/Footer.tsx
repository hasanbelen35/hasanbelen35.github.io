import '../CSS/Footer.css';
import { IoLogoGithub, IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
interface PageInfos {
    links: string;
    href: string;
}

interface FooterIcons {
    icon: React.ReactNode;
    href: string;
}

// FOOTER DATA INFOS
const pageInfos: PageInfos[] = [
    { links: "Home", href: "#home" },
    { links: "About", href: "#about" },
    { links: "Skills", href: "#skill" },
    { links: "Contact", href: "#contact" }
];

const footerIcons: FooterIcons[] = [
    { icon: <IoLogoGithub />, href: "https://github.com/hasanbelen35" },
    { icon: <IoLogoInstagram />, href: "https://www.instagram.com/hasan.bln1" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/hasan-belen-668457318/?originalSubdomain=tr" }
]

const Footer: React.FC = () => {
    return (
        <div id="footer" className='min-h-64 px-12 pt-12 pb-16 flex flex-col md:flex-row justify-evenly items-center'>
            <div id='pageInfos' className="flex flex-col md:flex-row items-center justify-evenly text-xl gap-6 md:gap-24">
                {pageInfos.map((info, index) => (
                    <a key={index} className='no-underline hover:text-gray-400 transition duration-500 hover:font-extralight text-gray-300' href={info.href}>
                        {info.links}
                    </a>
                ))}
            </div>

            <div id="icons" className='text-white flex gap-6 md:gap-16 text-3xl justify-evenly items-center h-32'>
                {footerIcons.map((icon, index) => (
                    <a key={index} href={icon.href} target='_blank' rel='noopener noreferrer' className='hover:text-4xl hover:text-gray-500 transition duration-500'>
                        {icon.icon}
                    </a>
                ))}
            </div>
            <div>
                <h1 className='text-red-500'>
                    EMAIL: <a className='text-white underline' href="https://mail.google.com/mail/u/1/#inbox" target='_blank'>hasan.bln3535@gmail.com</a>

                </h1> <br />
                <p className='text-white'><span className='text-red-500'>Adress:</span> Bayraklı/Izmir</p>


            </div>
        </div>
    );
}

export default Footer;
