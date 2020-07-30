import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button'

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

  useEffect(() => {
    if(window.location.href.includes('localhost')) {
      const URL = 'http://localhost:8080/categorias'; 
      fetch(URL)
       .then(async (respostaDoServer) =>{
        if(respostaDoServer.ok) {
          const resposta = await respostaDoServer.json();
          setCategorias(resposta);
          return; 
        }
        throw new Error('Não foi possível pegar os dados');
       })
    }    
  }, []);

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
        type="textarea"
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
        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>        
        {categorias.map((categorias)=>{
          return(
            <li key={`${categorias.nome}`}>
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