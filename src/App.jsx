import { Header } from "./components/header"
import { Post } from "./Post"
import "./global.css"

export function App() {

  return (
    <div>
      <Header />

      <Post 
        author="Paola" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a pariatur, deleniti iusto amet possimus maiores ea soluta saepe ratione quis, voluptas illo veritatis illum praesentium adipisci nulla dolorem eaque."
      />
      <Post
        author="Iris"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a pariatur, deleniti iusto amet possimus maiores ea soluta saepe ratione quis, voluptas illo veritatis illum praesentium adipisci nulla dolorem eaque."
      />  
    </div>
  )
}



