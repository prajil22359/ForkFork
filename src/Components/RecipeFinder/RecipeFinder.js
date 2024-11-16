import React, { useState } from 'react';
import './RecipeFinder.css';
import Menu from '../Menu/Menu';
import searchIcon from '../Assets/search_button.png';

const RecipeFinder = () => {
    const [query, setQuery] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const [dishes, setDishes] = useState([]);

    const handleSearch = () => {
        // Example data for search results (add more dishes here to make another row)
        const exampleDishes = [
            { name: "Omelette", image: "https://via.placeholder.com/150", description: "A fluffy omelette.", type: "Non-Veg", protein: 15, carbs: 5 },
            { name: "Vegetable Sandwich", image: "https://via.placeholder.com/150", description: "A healthy veggie sandwich.", type: "Veg", protein: 10, carbs: 20 },
            { name: "Pasta Salad", image: "https://via.placeholder.com/150", description: "A refreshing pasta salad.", type: "Veg", protein: 5, carbs: 30 },
            { name: "Grilled Chicken", image: "https://via.placeholder.com/150", description: "Juicy grilled chicken.", type: "Non-Veg", protein: 30, carbs: 3 },
            { name: "Fruit Salad", image: "https://via.placeholder.com/150", description: "A vibrant mix of fresh fruits.", type: "Veg", protein: 2, carbs: 25 },
            { name: "Burger", image: "https://via.placeholder.com/150", description: "A juicy beef burger with veggies.", type: "Non-Veg", protein: 20, carbs: 30 },
            { name: "Veggie Soup", image: "https://via.placeholder.com/150", description: "A warm and healthy vegetable soup.", type: "Veg", protein: 7, carbs: 15 },
            { name: "Fried Rice", image: "https://via.placeholder.com/150", description: "Fried rice with mixed vegetables.", type: "Veg", protein: 8, carbs: 40 },
            { name: "Chicken Wrap", image: "https://via.placeholder.com/150", description: "A tasty wrap with grilled chicken.", type: "Non-Veg", protein: 25, carbs: 35 }
        ];

        setDishes(exampleDishes);
        setShowMenu(true);

        // Scroll to the Menu section smoothly
        setTimeout(() => {
            document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return (
        <div>
            {/* Background with search box */}
            <div className="background">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="What's Cooking Today?"
                        className="search-input"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        <img src={searchIcon} alt="Search" />
                    </button>
                </div>
            </div>

            {/* Menu component */}
            {showMenu && <Menu dishes={dishes} />}
        </div>
    );
};

export default RecipeFinder;
