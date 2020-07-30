import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoreIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  
  // State usando a biblioteca {useState} = coloca valor e uma função para um elemento
  const [values, setValues] = useState(valoreIniciais);
  const [categorias, setCategorias] = useState([]);
  
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosdoEvento){
    setValue(infosdoEvento.target.getAttribute('name'), 
    infosdoEvento.target.value)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      {/* Metodo de enviar o formulario sem o reload */}
      <form onSubmit={function handleSubmit(infosdoEvento){
        infosdoEvento.preventDefault();
        setCategorias ([
          ...categorias,
          values
        ]);

        setValues(valoreIniciais)
      }}>

      <FormField
        label="Nome da Categoria"
        type="text"
        name="nome"
        value={values.nome}
        onChange={handleChange}
      />
      <FormField 
        label="Descrição"
        type="text"
        name="descricao"
        value={values.descricao}
        onChange={handleChange}
      />
       <FormField 
        label="Cor"
        type="color"
        name="cor" 
        value={values.cor}
        onChange={handleChange}
      />
     {/*  <div>
        <label>
          Descrição: 
          <textarea
            type="text"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Cor:
          <input
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />
        </label>
      </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>        
        {categorias.map((categorias, indice)=>{
          return(
            <li key={`${categorias}${indice}`}>
              {categorias.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;