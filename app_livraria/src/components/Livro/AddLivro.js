import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddLivro = () => {
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    editoraId: "", // Assuming you link the book to an Editora by ID
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/livro", livro);
      navigate("/livro");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">Adicionar Livro</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            placeholder="Digite o título do livro"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            name="autor"
            placeholder="Digite o nome do autor"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID da Editora</label>
          <input
            type="text"
            className="form-control"
            name="editoraId"
            placeholder="Digite o ID da Editora"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Cadastrar
        </button>
        <br />
        <Link to="/livro">Listar Livros</Link>
      </form>
    </div>
  );
};

export default AddLivro;
