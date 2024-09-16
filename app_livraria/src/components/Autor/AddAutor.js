import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddAutor = () => {
  const [autor, setAutor] = useState({
    nome: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAutor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/autor", autor);
      navigate("/autor");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Adicionar Autor</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o nome do autor"
            name="nome"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Cadastrar
        </button>
        <br />
        <Link to="/autor">Listar Autores</Link>
      </form>
    </div>
  );
};

export default AddAutor;
