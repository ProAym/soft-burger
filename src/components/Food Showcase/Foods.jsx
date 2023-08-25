
import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import FoodItem from './FoodItem';
import Skeleton from './Skeleton';

const Foods = () => {
    const [menuTab, setMenuTab] = useState('Yemekler');
    const [loading, setLoading] = useState(false);
    const [foods] = useFetch();

    // Loading
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    // Food menu tab
    const handleMenuTabs = (type) => {
        setMenuTab(type);
    }

    // Filtered food items based on menuTab
    const filteredFoods = foods.filter(food => food.category === menuTab);

    return (
        <section className="my-12 max-w-screen-xl mx-auto px-6">
            <div className="flex items-center justify-center space-x-6">
                {/* ... menu tab code ... */}
                <p className={menuTab === 'Yemekler' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Yemekler')}>Yemekler</p>
                <p className={menuTab === 'Içecekler' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Içecekler')}>Içecekler</p>
                <p className={menuTab === 'Tatlılar' ? "active_menu_tab poppins bg-primary" : "menu_tab poppins"} onClick={() => handleMenuTabs('Tatlılar')}>Tatlılar</p>
            </div>

            <div>
                {loading ? (
                    <Skeleton /> // Render loading skeleton or indicator
                ) : (
                    <FoodItem foodMenus={filteredFoods} /> // Pass filteredFoods as prop
                )}
            </div>
        </section>
    );
}

export default Foods;
