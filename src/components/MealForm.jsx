import { useState } from 'react';

function MealForm() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const API_KEY = "AIzaSyAdatd1AFZXSJZy45UgeAI3HxRDRYsvDHY"; 

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter a meal name');
      return;
    }

    const prompt = `Provide only the nutritional information for ${query} in the following format: protein: X gm, carbs: Y gm, fats: Z gm, calories: A kcal.`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
        }
      );

      const data = await response.json();
      if (data?.candidates?.length > 0) {
        setResult(data.candidates[0].content.parts[0].text);
        setError('');
      } else {
        setResult('No nutritional data found.');
        setError('');
      }
    } catch (err) {
      setError('Error fetching data.');
      setResult('');
    }

    setQuery('');
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex space-x-2" data-aos="zoom-in-up">
        <input
          type="text"
          placeholder="Search for a meal"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Search
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}
      {result && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Meal Suggestions</h3>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default MealForm;