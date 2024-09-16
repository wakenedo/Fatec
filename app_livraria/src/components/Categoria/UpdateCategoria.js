import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateCategoria = () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState({
    descricao: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoria = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/categoria/${id}`);
        setCategoria(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategoria();
  }, [id]);

  const handleChange = (e) => {
    setCategoria((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/categoria/${id}`, categoria);
      navigate("/categoria");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Atualizar Categoria</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Descrição:</label>
          <input
            type="text"
            className="form-control"
            name="descricao"
            value={categoria.descricao}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Atualizar
        </button>
        <br />
        <Link to="/categoria">Listar Categorias</Link>
      </form>
    </div>
  );
};

export default UpdateCategoria;
