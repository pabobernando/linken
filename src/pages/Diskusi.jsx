import React, { useEffect, useState } from "react";
import Web3 from "web3";
import useAddress from "../store/address";


const web3 = new Web3(window.ethereum);
const contractAddress = "0x2286e7Cc19517931EA1c3C5C5ff06c27F8a06277"; 
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"comments","outputs":[{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_content","type":"string"}],"name":"createComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_commentIndex","type":"uint256"}],"name":"deleteComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_commentIndex","type":"uint256"}],"name":"getComment","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCommentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_commentIndex","type":"uint256"},{"internalType":"string","name":"_newContent","type":"string"}],"name":"updateComment","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Ganti dengan ABI kontrak Anda

const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

const Diskusi = () => {
  const [comments, setComments] = useState([]);
const [newContent, setNewContent] = useState("");

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const commentCount = await contractInstance.methods.getCommentCount().call();
      const fetchedComments = [];

      for (let i = 0; i < commentCount; i++) {
        const comment = await contractInstance.methods.getComment(i).call();
        fetchedComments.push(comment);
      }

      setComments(fetchedComments);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setNewContent(event.target.value);
  };

  const createComment = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    try {
      await contractInstance.methods.createComment(content).send({ from: web3.currentProvider.selectedAddress });
      loadComments();
      event.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const editComment = async (index, newContent) => {
    try {
      const contractOwner = await contractInstance.methods.owner().call();
      const currentAddress = web3.currentProvider.selectedAddress;
      
      if (contractOwner.toLowerCase() === currentAddress.toLowerCase()) {
        const comment = await contractInstance.methods.getComment(index).call();
        const commentAuthor = comment[0];
        
        if (currentAddress.toLowerCase() === commentAuthor.toLowerCase()) {
          await contractInstance.methods.updateComment(index, newContent).send({ from: currentAddress });
          loadComments();
          console.log("Edit successful");
        } else {
          console.log("Only the comment author can edit the comment");
        }
      } else {
        console.log("Only the contract owner can edit comments");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  
  

  const deleteComment = async (index) => {
    try {
      await contractInstance.methods.deleteComment(index).send({ from: web3.currentProvider.selectedAddress });
      loadComments();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Discussion Contract</h1>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="comment border border-gray-300 p-4 rounded-md my-2">
            <p className="font-bold">Author: {comment[0]}</p>
            <p>Comment: {comment[1]}</p>
            <div className="flex mt-2">
              <input 
                type="text" 
                className="border border-gray-300 p-2 rounded-md mr-2" 
                value={newContent}
                onChange={handleInputChange}/>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={() => editComment(index, newContent)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={() => deleteComment(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={createComment} className="my-4">
        <label htmlFor="content" className="mr-2">Comment:</label>
        <input type="text" id="content" required className="border border-gray-300 p-2 rounded-md" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2">Submit</button>
      </form>
    </div>
  );
};

export default Diskusi;
