import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateAutor = () => {
  const { id } = useParams();
  const [autor, setAutor] = useState({
    nome: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAutor = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/autor/${id}`);
        setAutor(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAutor();
  }, [id]);

  const handleChange = (e) => {
    setAutor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8081/autor/${id}`, autor);
      navigate("/autor");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <h2>Atualizar Autor</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            name="nome"
            value={autor.nome}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}>
          Atualizar
        </button>
        <br />
        <Link to="/autor">Listar Autores</Link>
      </form>
    </div>
  );
};

export default UpdateAutor;
