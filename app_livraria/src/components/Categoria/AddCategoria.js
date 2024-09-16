import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const AddCategoria = () => {
  const [categoria, setCategoria] = useState({
    descricao: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCategoria((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/categoria", categoria);
      navigate("/categoria");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Adicionar Categoria</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Descrição:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite a descrição da categoria"
            name="descricao"
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Cadastrar
        </button>
        <br />
        <Link to="/categoria">Listar Categorias</Link>
      </form>
    </div>
  );
};

export default AddCategoria;
