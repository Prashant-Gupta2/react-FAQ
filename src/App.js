import logo from './logo.svg';
import './App.css';
import Questions from './Components/Questions';
const data=[
  {
   id:1,
   question:"What is React?",
   answer:"It is a javascript library for building awesome UI, Specially for single page application." 
  },
  {
    id:2,
    question:"What is Library?",
    answer:"Library is a colletions of reusalble code and modules or we can say pre-written code." 
   },
   {
    id:3,
    question:"What is Component in React?",
    answer:"Component is like a block which allows developers to divide the UI into smaller part." 
   },
   {
    id:4,
    question:"What is the Role of Hooks in React?",
    answer:"Hooks are function that allows developers to use satate and other react features in functional component." 
   },
   {
    id:5,
    question:"Why we need custom hook in react?",
    answer:"Custom hooks is also a function that allows you to resuse stateful logic without duplicating code across components." 
   },
   {
    id:6,
    question:"What is Virtual DOM?",
    answer:"It is a lightweight representation of the real DOM in memory, whenever state or props change it creates a new virtual DOM." 
   },
   {
    id:7,
    question:"What are recat fragments, and why are the used?",
    answer:"Fragments are a lightweight way to group multiple elements without adding extra nodes to the DOM." 
   },
   {
    id:8,
    question:"What is the context API in react?",
    answer:"It allows you to share state or data between components without having to pass props down manually through each level of the components" 
   },

]
function App() {
  return (
    <div className="App">
     <Questions item={data}/>
    </div>
  );
}

export default App;
