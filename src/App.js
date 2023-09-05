import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component{
  state = {
  posts:[
    {
      id:1,
      titulo: 'Titulo 1',
      conteudo: 'Conteudo 1'
      
    },
    {
      id:2,
      titulo: 'Titulo 2',
      conteudo: 'Conteudo 2'
    },
    {
      id:3,
      titulo: 'Titulo 3',
      conteudo: 'Conteudo 3'
    }
  ]
   
  }

render(){
  const{posts}= this.state;//Atribuição via desestruturação
  return(
    <div> 
      {posts.map(post => (
       <div key={post.id}>

       <h1> {post.titulo} </h1>
       <p> {post.conteudo} </p>

       </div>

       ))}
     </div>
  )
 }
}

export default App;
