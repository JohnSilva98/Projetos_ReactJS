import axios from "../axios-config";
import { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./Memory.css";

const Memory = () => {
  const { id } = useParams();

  const [memory, setMemory] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getMemory = async () => {
      const res = await axios.get(`/memories/${id}`);
      setMemory(res.data);
      setComments(res.data.comments);
    };
    getMemory();
  });

  const deleteMemory = async () => {
    const memory = await axios.delete(`/memories/${id}`);
    setMemory("");
    setComments("");
    navigate("/");
    toast.success("Memória  deletada com sucesso!");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const commment = { name, text };

      const res = await axios.patch(
        `/memories/${memory._id}/comment/`,
        commment
      );

      const lastComment = res.data.memory.comments.pop();

      setComments((comments) => [...comments, lastComment]);

      setName("");
      setText("");

      toast.success(res.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
    }
  };

  if (!memory) return <p>Carregando...</p>;
  return (
    <div className="memory-page">
      <img src={`${axios.defaults.baseURL}${memory.src}`} alt={memory.title} />
      <h2>{memory.title}</h2>
      <p>{memory.description}</p>
      <div className="comment-form">
        <h3>Envie o seu comentário</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <textarea
              placeholder="Seu comentário"
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></textarea>
          </label>
          <input type="submit" value="Enviar" className="btn" />
          <input
            type="submit"
            value="Excluir memória"
            className="btn"
            onClick={deleteMemory}
          />
        </form>
      </div>
      <div className="comments-container">
        <h3>Comentários ({comments.length})</h3>
        {comments.length === 0 && <p>Não há comentários</p>}
        {comments.length > 0 &&
          comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <p className="comment-name">{comment.name}</p>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Memory;
