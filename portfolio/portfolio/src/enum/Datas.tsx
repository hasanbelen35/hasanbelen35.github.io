
import img from '../assets/homeimg.png';

// HEDAER LINKS INTERFACE
interface Links {
    id: number;
    title: string;
    href: string;
}
// HOME INFO INTERFACE
interface HomeInfo {
    img: string;
    title: string;
    paragraph: string;
}
// HOME PAGE DATAS
export const homeInfo: HomeInfo = {
    img: img,
    title: "Hasan Belen",
    paragraph: "-The Developer / Code Lover-"
};

// HEADER LINKS DATAS
export const links: Links[] = [
    {
        id: 1,
        title: "Home",
        href: "#home"

    },
    {
        id: 2,
        title: "About",
        href: "#about"

    },
    {
        id: 3,
        title: "Skills",
        href: "#skill"

    },
    {
        id: 4,
        title: "Contact",
        href: "#contact"

    }
];

