import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReadAutor = () => {
  const { id } = useParams();
  const [autor, setAutor] = useState({});

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

  return (
    <div className="container">
      <h2>Detalhes do Autor</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{autor.id}</td>
            <td>{autor.nome}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReadAutor;
