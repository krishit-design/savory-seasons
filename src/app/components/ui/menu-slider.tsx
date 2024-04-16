import { useState } from 'react';
import styles from './MenuSlider.module.css';

interface Item {
    heading: string;
    itemHeading: { Heading1: string; Heading2: string; Heading3: string }[];
    items: { Item1: string[]; Item2: string[]; Item3: string[] }[];
}

const items: Item[] = [
    {
        heading: "Khushiyon ka Thali - 300",
        itemHeading: [{
            Heading1: 'Starters',
            Heading2: "Main Menu",
            Heading3: "Sweets and Deserts"
        }],
        items: [{
            Item1: ["Tomato", "Hot n Sour", "Hara Bhara Kabab"],
            Item2: ["Paneer", "Mix Vegetable", "Dal", "Rice", "3 Butter Roti"],
            Item3: ["Gulab Jamun", "Icecream"]
        }]
    },
    {
        heading: "Dil Se Daawat - 500",
        itemHeading: [{
            Heading1: 'Starters',
            Heading2: "Main Menu",
            Heading3: "Sweets and Deserts"
        }],
        items: [{
            Item1: ["Mocktails", "Soups * 4", "Chaats", "Manchurian"],
            Item2: ["Paneer", "Mix Vegetable", "Dal", "Rice", "Butter Roti * 5"],
            Item3: ["Aamras / Rabdi - Jalebi", "Icecream * 2"]
        }]
    },
    {
        heading: "Shandaar Swad Sargam - 700",
        itemHeading: [{
            Heading1: 'Starters',
            Heading2: "Main Menu",
            Heading3: "Sweets and Deserts"
        }],
        items: [{
            Item1: ["Mocktails * 3", "Soups * 4", "Italian mini / Bread pizza", "Pasta * 2", "Chilly paneer / spring roll"],
            Item2: ["Sabji * 3", "Dal", "Rice", "Roti / Naan * 5", "Dosa * 2", "Pulav * 2", "Colddrinks * 2"],
            Item3: ["Aamras / Rabdi - Jalebi", "Icecream / Brownie"]
        }]
    }
];

function MenuSlider() { 
 
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState<'prev' | 'next' | ''>('');

    const nextTestimonial = () => {
        setDirection('next');
        setTimeout(() => {
            setCurrent((current + 1) % items.length);
            setDirection('');
        }, 10); // A small delay to ensure the class change happens before the transition
    };

    const prevTestimonial = () => {
        setDirection('prev');
        setTimeout(() => {
            setCurrent((current - 1 + items.length) % items.length);
            setDirection('');
        }, 10); // A small delay to ensure the class change happens before the transition
    };

    return (
        <div className='moving-cards_sm'>
            <div className={styles.container}>
                <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Menu
                </h1>
                <div className={`menu-slider ${direction}`}>
                    <div className={styles.menu}>

                        <div className={styles.heading}>{items[current].heading}</div>
                        <div className='items-content'>
                            <div className={styles.itemsHeading}>{items[current].itemHeading[0].Heading1}</div>
                            <div className={styles.items}>{items[current].items[0].Item1[0]}</div>
                            <div className={styles.items}>{items[current].items[0].Item1[1]}</div>
                            <div className={styles.items}>{items[current].items[0].Item1[2]}</div>
                            <div className={styles.items}>{items[current].items[0].Item1[3]}</div>
                        </div>
                        <div className='items-content'>
                            <div className={styles.itemsHeading}>{items[current].itemHeading[0].Heading2}</div>
                            <div className={styles.items}>{items[current].items[0].Item2[0]}</div>
                            <div className={styles.items}>{items[current].items[0].Item2[1]}</div>
                            <div className={styles.items}>{items[current].items[0].Item2[2]}</div>
                            <div className={styles.items}>{items[current].items[0].Item2[3]}</div>
                            <div className={styles.items}>{items[current].items[0].Item2[4]}</div>
                        </div>
                        <div className='items-content'>
                            <div className={styles.itemsHeading}>{items[current].itemHeading[0].Heading3}</div>
                            <div className={styles.items}>{items[current].items[0].Item3[0]}</div>
                            <div className={styles.items}>{items[current].items[0].Item3[1]}</div>
                        </div>
                        {/* <h3 className={styles.itemHeading}>"{items[current].itemHeading[0].Heading1}"</h3> */}
                        {/* <p className={styles.items}>- {items[current].items}, {items[current].position}</p> */}
                    </div>

                    <div className={styles.buttons}>
                        <button className={styles.buttonSlider} onClick={prevTestimonial}>Previous</button>
                        <button className={styles.buttonSlider} onClick={nextTestimonial}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuSlider;
