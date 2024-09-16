import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadCategoria = () => {
  const { id } = useParams();
  const [categoria, setCategoria] = useState({});

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

  return (
    <div className="container">
      <h2>Detalhes da Categoria</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{categoria.id}</td>
            <td>{categoria.descricao}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReadCategoria;
