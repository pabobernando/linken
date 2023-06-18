import React, { useState } from 'react';

function FormUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform upload logic here
    console.log('File:', file);
    console.log('Text:', text);
    // Reset the form
    setFile(null);
    setText('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-6 bg-black border border-cyan-500 rounded-md shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-white">Upload Berita </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="photo" className="block mb-2 text-lg font-medium text-white">
              Upload Photo:
            </label>
            <input
              type="file"
              id="photo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 bg-black border text-white border-cyan-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="text" className="block mb-2 text-lg font-medium text-white">
              Text:
            </label>
            <textarea
              id="text"
              value={text}
              onChange={handleTextChange}
              className="w-full h-32 px-4 py-2 bg-black border text-white border-cyan-500 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 text-base font-medium text-white bg-cyan-500 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormUpload;
