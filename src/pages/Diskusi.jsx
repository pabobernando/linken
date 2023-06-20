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
        <ul className="bg-gray-600 border border-cyan-500 p-4 rounded-lg mb-4">
          {comments.map((comment, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <div>
  <span className="font-bold text-cyan-500">{comment.username} :</span>
  <span className='text-pink-500'> {comment.comment}</span>
</div>

              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="ml-2 text-blue-500 hover:text-blue-600"
                >
                  <svg width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z" />
                  </svg>
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-2 text-red-500 hover:text-red-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 18v-6h4v6h5v-8h3L12 3 2 10h3v8h5zm8-16H6a1 1 0 0 0-1 1v1h16V3a1 1 0 0 0-1-1zm0 4H4v8h16V6zm-2 6h-3V9h3v3z" />
                  </svg>
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
