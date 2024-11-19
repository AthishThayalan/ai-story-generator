import React, { useState, useRef } from "react";

const LandingPage: React.FC = () => {
  const [theme, setTheme] = useState<string>("");
  const [characters, setCharacters] = useState<string>("");
  const [setting, setSetting] = useState<string>("");
  const [length, setLength] = useState<string>("Short Story");
  const [hook, setHook] = useState<string>("");
  const [story, setStory] = useState<string | null>(null); // To display the story
  const storyRef = useRef<HTMLDivElement>(null); // Reference for the story section

  const handleSubmit = () => {
    // Simulate story generation
    const generatedStory = `
      Once upon a time in a ${setting}, there were ${characters}. 
      This was the beginning of a ${length.toLowerCase()} with the theme "${theme}". 
      The story starts: ${hook}.
    `;
    setStory(generatedStory); // Set the generated story

    // Scroll to the story section after it is displayed
    setTimeout(() => {
      storyRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // Slight delay ensures smooth scrolling after state update
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex items-center justify-center">
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-3xl">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-6">
          AI Story Generator
        </h1>
        <p className="text-center text-gray-400 mb-6">
          Create custom stories by entering your preferences below.
        </p>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {/* Theme Input */}
          <div>
            <label
              htmlFor="theme"
              className="block text-sm font-medium text-gray-300"
            >
              Theme
            </label>
            <input
              type="text"
              id="theme"
              className="mt-2 block w-full h-12 rounded-md bg-gray-700 border border-gray-600 text-gray-300 shadow-md hover:shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm transition duration-200 px-4"
              placeholder="e.g., Adventure, Sci-fi"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              required
            />
          </div>

          {/* Characters Input */}
          <div>
            <label
              htmlFor="characters"
              className="block text-sm font-medium text-gray-300"
            >
              Characters
            </label>
            <input
              type="text"
              id="characters"
              className="mt-2 block w-full h-12 rounded-md bg-gray-700 border border-gray-600 text-gray-300 shadow-md hover:shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm transition duration-200 px-4"
              placeholder="e.g., Aria, a brave warrior"
              value={characters}
              onChange={(e) => setCharacters(e.target.value)}
              required
            />
          </div>

          {/* Setting Input */}
          <div>
            <label
              htmlFor="setting"
              className="block text-sm font-medium text-gray-300"
            >
              Setting
            </label>
            <input
              type="text"
              id="setting"
              className="mt-2 block w-full h-12 rounded-md bg-gray-700 border border-gray-600 text-gray-300 shadow-md hover:shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm transition duration-200 px-4"
              placeholder="e.g., Enchanted forest"
              value={setting}
              onChange={(e) => setSetting(e.target.value)}
              required
            />
          </div>

          {/* Length Dropdown */}
          <div>
            <label
              htmlFor="length"
              className="block text-sm font-medium text-gray-300"
            >
              Story Length
            </label>
            <select
              id="length"
              className="mt-2 block w-full h-12 rounded-md bg-gray-700 border border-gray-600 text-gray-300 shadow-md hover:shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm transition duration-200 px-4"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              required
            >
              <option value="Short Story">Short Story</option>
              <option value="Flash Fiction">Flash Fiction</option>
              <option value="Full Chapter">Full Chapter</option>
            </select>
          </div>

          {/* Hook Input */}
          <div>
            <label
              htmlFor="hook"
              className="block text-sm font-medium text-gray-300"
            >
              Story Hook
            </label>
            <input
              type="text"
              id="hook"
              className="mt-2 block w-full h-12 rounded-md bg-gray-700 border border-gray-600 text-gray-300 shadow-md hover:shadow-lg focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 sm:text-sm transition duration-200 px-4"
              placeholder="e.g., She found an ancient sword glowing in the moonlight."
              value={hook}
              onChange={(e) => setHook(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg shadow-md hover:bg-indigo-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition duration-200"
            >
              Generate Story
            </button>
          </div>
        </form>

        {/* Display Generated Story */}
        {story && (
          <div
            ref={storyRef}
            className="mt-8 bg-gray-700 rounded-lg p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold text-indigo-400 mb-4">
              Your Story
            </h2>
            <p className="text-gray-300 whitespace-pre-line">{story}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
