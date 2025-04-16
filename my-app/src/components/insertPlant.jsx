import React, { useState } from 'react';
import axios from 'axios';

const AddPlantForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [categorieId, setCategorieId] = useState('');

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setResult(null);
      setError(null);
      console.log(name)
      const response = await axios.post('http://peapini-re.test/api/plantes', {
        name,
        price: parseInt(price),
        description,
        image,
        categorie_id: parseInt(categorieId)
      });

      setResult(response.data);

      setName('');
      setPrice('');
      setDescription('');
      setImage('');
      setCategorieId('');

    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError({ error: 'Unexpected error occurred' });
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-xl rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">🌱 Add a New Plant</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Plant Name"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="number"
          value={categorieId}
          onChange={(e) => setCategorieId(e.target.value)}
          placeholder="Category ID"
          required
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          type="submit"
          className="bg-green-600 text-white rounded-lg py-3 hover:bg-green-700 transition-all font-semibold"
        >
          ➕ Add Plant
        </button>
      </form>

      {/* Result message */}
      {result && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg">
          ✅ Plant "<strong>{result.name}</strong>" added successfully!
        </div>
      )}

      {/* Error message */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-800 rounded-lg">
          <strong>Error:</strong> {error.error || 'An error occurred'}
          {error.details && <p>{error.details}</p>}
        </div>
      )}
    </div>
  );
};

export default AddPlantForm;
