import "./index.css"
import Data from "../../service/service";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";





function Sheet () {

    const [data, setData] = useState([]);
    const [loading, setLoading] =  useState(null)
    const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getCellValue = (data, colName) => {
    if (!data || data.length === 0) return "Nenhum dado carregado";
  
    // A primeira linha contém o cabeçalho com os nomes das colunas
    const row = data[0]; // Pegamos a primeira linha (o cabeçalho)
    
    // Verificamos se a coluna existe no cabeçalho
    if (row && row[colName] !== undefined) {
      return row[colName] || "Célula vazia"; // Retorna o valor da célula se encontrada
    }
  
    return "Coluna não encontrada"; // Caso a coluna não seja encontrada
  };  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await Data("/data.xlsm"); 
        setTimeout(() => {
          setData(jsonData);
          setLoading(false);
        },500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
        fetchData();
      }, []);

    return (
        <div className="container">
            <header className="main-header"></header>
            <div className="sidebar"></div>
            <div className="ctn">
                <div className="income">
                    <h4>INCOME</h4>
                    {loading && <p>Carregando...</p>}
                     {error && <p>{error}</p>}
                       {!loading && !error && (
                           <p>{getCellValue(data, "Row Labels")}</p>
                       )};
                </div>
                <div className="expense">
                    <h4>EXPENSE</h4>
                </div>
                <div className="balance">
                    <h4>BALANCE</h4>
                </div>
                <div className="a1">
                    <h4>1º QUARTER</h4>
                </div>
                <div className="a2">
                    <h4>2º QUARTER</h4>
                </div>
                <div className="a3">
                    <h4>3º QUARTER</h4>
                </div>
                <div className="a4">
                    <h4>4º QUARTER</h4>
                </div>
                <div className="cross"></div>
                <div className="graphm"></div>
                <div className="income-entry"></div>
                <div className="invest"></div>
                <div className="exp-category"></div>
                <div className="exp-details"></div>
            </div>
        </div>
    )
}

export default Sheet;