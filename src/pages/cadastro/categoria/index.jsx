import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/pageDefault'
import FormField from '../../../components/formField'

export default function CadastroCategoria(){
  const [categorias, setCategorias] = useState([])    
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [Values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor){
    setValues({
      ...Values,
      [chave]: valor
    })
  }

  return(
      <PageDefault>
        <h1>Cadastrar Categoria: {Values.nome}</h1>
        <form onSubmit={e=>{
          e.preventDefault()
          setCategorias([...categorias, Values])
          setValues(valoresIniciais)
        }}>
          <FormField
            Tag = "input"
            labelText="Nome da Categoria: "
            type="text"
            value={Values.nome}
            onChange={e=>{setValue('nome',e.target.value)}}
          />
          <FormField
            Tag = "textarea"
            labelText="Descrição: "
            type="text"
            value={Values.descricao}
            onChange={e=>{setValue('descricao',e.target.value)}}
          />
          <FormField
            Tag = "input"
            labelText="cor"
            type="color"
            value={Values.cor}
            onChange={e=>{setValue('cor',e.target.value)}}
          />
          <button>Cadastrar</button>
        </form>
        <ul>
          {categorias.map((cat, indice)=>{
            return(
              <li key={indice}>{cat.nome}</li>  
            )
          })}
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    )
  }