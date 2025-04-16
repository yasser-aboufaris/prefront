function PlantesDashboard() {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-purple-300 font-serif text-xl">Loading...</p>
            </div>
        );
    }

    return (
        <div>
            <h1 className="text-3xl font-serif mb-8 text-purple-300 text-center border-b border-purple-800 pb-4">
                🌿 Plantes Dashboard
            </h1>

            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-purple-800">
                    <thead>
                        <tr className="bg-purple-900 text-purple-200">
                            <th className="px-4 py-2 border border-purple-800">ID</th>
                            <th className="px-4 py-2 border border-purple-800">Image</th>
                            <th className="px-4 py-2 border border-purple-800">Name</th>
                            <th className="px-4 py-2 border border-purple-800">Price ($)</th>
                            <th className="px-4 py-2 border border-purple-800">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plants.map((plant) => (
                            <tr key={plant.id} className="hover:bg-purple-800">
                                <td className="px-4 py-2 border border-purple-800">{plant.id}</td>
                                <td className="px-4 py-2 border border-purple-800">
                                    <img 
                                        src={plant.image || "https://via.placeholder.com/80"} 
                                        alt={plant.name || "Plant"} 
                                        className="w-20 h-20 object-cover rounded" 
                                    />
                                </td>
                                <td className="px-4 py-2 border border-purple-800">{plant.name}</td>
                                <td className="px-4 py-2 border border-purple-800">${plant.price}</td>
                                <td className="px-4 py-2 border border-purple-800">{plant.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default PlantesDashboard;
