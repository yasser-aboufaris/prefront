import { useState, useEffect } from "react";
import axios from "axios";
import PlantCard from "./plantCard";

function Main() {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Fetch plants when the component mounts using axios
        axios.get("http://peapini-re.test/api/plantes")
            .then((response) => {
                setPlants(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching plants:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-black">
            <p className="text-purple-300 font-serif text-xl">Loading...</p>
        </div>;
    }

    return (
        <div className="min-h-screen bg-black text-gray-300 p-6">
            <h1 className="text-3xl font-serif mb-8 text-purple-300 text-center border-b border-purple-800 pb-4">
                Enchanted Flora
            </h1>
            
            {/* Plants Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plants.map((plant) => (
                    <PlantCard 
                        key={plant.id} 
                        plant={plant}
                        onAddToCart={() => alert(`Added ${plant.name} to cart`)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Main;