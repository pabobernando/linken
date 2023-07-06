import React, { useState } from 'react';
import Uwong from '../img/pabober.jpg';
import useAddress from '../store/address';

function FormUpload() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  const [submittedNews, setSubmittedNews] = useState(null);
  const user = useAddress((state) => state.user);

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

    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = (currentDateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDateTime.getDate().toString().padStart(2, '0');
    const hour = currentDateTime.getHours().toString().padStart(2, '0');
    const minute = currentDateTime.getMinutes().toString().padStart(2, '0');
    const timestamp = `${day}-${month}-${year} ${hour}:${minute}`;

    // Set submitted news with timestamp
    setSubmittedNews({
      file,
      text,
      timestamp
    });

    // Reset the form
    setFile(null);
    setText('');
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-6 bg-black border border-cyan-500 rounded-md shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-white">Upload Berita</h2>
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

        {submittedNews && (
  <div className="mt-6 bg-black border border-cyan-500 p-6 rounded-md shadow-md">
    <h3 className="text-xl font-bold mb-2">Submitted News:</h3>
    <div className="mb-2">
      {submittedNews.file && (
        <img src={URL.createObjectURL(submittedNews.file)} alt="Submitted Image" className="max-w-full h-auto" />
      )}
    </div>
    <p className="font-bold text-yellow-500 text-md">
      {submittedNews.text}
    </p>
    <p className="text-gray-400 dark:text-gray-300"></p>
    <div className="flex items-center mt-4">
      <a className="relative block">
        <img alt="profil" src={Uwong} className="mx-auto object-cover rounded-full h-10 w-10" />
      </a>
      <div className="flex flex-col justify-between ml-4 text-sm">
        <p className="text-black">{user}</p>
        <p className="text-gray-400 dark:text-gray-300">{submittedNews.timestamp}</p>
      </div>
    </div>
  </div>
)}

      </div>
    </div>
  );
}

export default FormUpload;
