import React, { useEffect, useState } from "react";
import Web3 from "web3";
import useAddress from "../store/address";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const web3 = new Web3(window.ethereum);
const contractAddress = "0xe572c8de349d0bdaa59b577286806fb6d88fd001"; 
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"comments","outputs":[{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"content","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_content","type":"string"}],"name":"createComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_commentIndex","type":"uint256"}],"name":"deleteComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_commentIndex","type":"uint256"}],"name":"getComment","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCommentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_commentIndex","type":"uint256"},{"internalType":"string","name":"_newContent","type":"string"}],"name":"updateComment","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Ganti dengan ABI kontrak Anda
const contractInstance = new web3.eth.Contract(contractABI, contractAddress);

const Discuss = () => {
  const [comments, setComments] = useState([]);
  const [newContent, setNewContent] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const address = useAddress((state) => state.address)
  

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

  const handleInputChange = (event, index) => {
    const value = event.target.value;
    setNewContent((prevContents) => {
      const updatedContents = [...prevContents];
      updatedContents[index] = value;
      return updatedContents;
    });
  };

  const createComment = async (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    try {
      const receipt = await contractInstance.methods.createComment(content).send({ from: web3.currentProvider.selectedAddress });
      loadComments();
      event.target.reset();
      toast.success(`Comment sent successfully!\nTransaction Hash: ${receipt.transactionHash}`, {
        position: "top-right",
        autoClose: 10000, // Auto-close the notification after 10 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } catch (error) {
      console.error(error);
      toast.error("Error sending the comment.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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
          toast.success("Comment edited successfully!", {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        } else {
          toast.error("You are not the author of this comment.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        toast.error("Only the contract owner can edit comments.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Error editing the comment.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    console.log("kepencet")
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
    <div className="h-screen flex flex-col bg-gray-950">
    <div className="flex-grow overflow-y-auto">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Discussion Contract</h1>
        {comments.map((comment, index) => (
          <div key={index} className="bg-gray-950 border border-cyan-500 p-4 rounded-md mb-4 text-white">
            <p className="font-bold">Author: {comment[0]}</p>
            {editIndex === index ? (
              <input
                type="text"
                className="w-full text-black border border-gray-300 p-2 rounded-md mb-2"
                value={newContent[index] || ""}
                onChange={(event) => handleInputChange(event, index)}
              />
            ) : (
              <p>Comment: {comment[1]}</p>
            )}
            <div className="mt-2">
              {editIndex !== index ? (() =>  {
                  console.log(address === comment[0])
                  if (address.toUpperCase() !== comment[0].toUpperCase()) {
                    return <></>
                  }

                  return (
                    <div className="flex justify-end">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                        onClick={() => handleEditClick(index)}
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
                  )
                }
              )() : (
                <div className="flex justify-end">
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => editComment(index, newContent[index])}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                    onClick={() => setEditIndex(-1)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    <form onSubmit={createComment} className="p-4">
      <div className="flex">
        <input
          type="text"
          id="content"
          required
          className="border border-gray-300 p-2 rounded-md flex-grow mr-2"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send
        </button>
      </div>
    </form>
    <ToastContainer />
  </div>
  );
};

export default Discuss;
