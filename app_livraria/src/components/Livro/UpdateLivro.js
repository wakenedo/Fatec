import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const UpdateLivro = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState({
    titulo: "",
    autor: "",
    editoraId: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/livro/${id}`)
      .then((res) => setLivro(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/livro/${id}`, livro);
      navigate("/livro");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Editar Livro</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            className="form-control"
            name="titulo"
            value={livro.titulo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Autor</label>
          <input
            type="text"
            className="form-control"
            name="autor"
            value={livro.autor}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">ID da Editora</label>
          <input
            type="text"
            className="form-control"
            name="editoraId"
            value={livro.editoraId}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Atualizar
        </button>
        <br />
        <Link to="/livro">Listar Livros</Link>
      </form>
    </div>
  );
};

export default UpdateLivro;
