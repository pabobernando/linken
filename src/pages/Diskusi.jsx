import React, { useState } from 'react';
import useAddress from '../store/address';

function Diskusi() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const address = useAddress((state) => state.address);

  const handleChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment !== '' && address !== '') {
      if (editIndex !== null) {
        const updatedComments = [...comments];
        updatedComments[editIndex] = {
          username: address,
          comment: newComment,
        };
        setComments(updatedComments);
        setEditIndex(null);
      } else {
        setComments([...comments, { username: address, comment: newComment }]);
      }
      setNewComment('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setNewComment(comments[index].comment);
  };

  const handleDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className="bg-black h-screen">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Diskusi</h2>
        <ul className="bg-gray-100 p-4 rounded-lg mb-4">
          {comments.map((comment, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <div>
                <span className="font-bold">{comment.username} : </span> {comment.comment}
              </div>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="ml-2 text-blue-500 hover:text-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-2 text-red-500 hover:text-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="flex flex-wrap mb-4">
          <input
            type="text"
            value={newComment}
            onChange={handleChange}
            className="w-full sm:w-auto px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Tambahkan komentar"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg focus:outline-none hover:bg-blue-600"
          >
            {editIndex !== null ? 'Update Komentar' : 'Tambahkan Komentar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Diskusi;
