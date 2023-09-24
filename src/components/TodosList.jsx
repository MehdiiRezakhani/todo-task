//components
import TodoItem from "./TodoItem";

function TodosList ({todos,theme,deleteTask}) {
  return(
    <div className="todos">
      {todos &&
        todos.map((todo, index) => {
          return (
            <TodoItem
              theme= {theme}
              item= {todo}
              key={index}
              id = {index}
              complete={false}
              deleteTask={deleteTask}
            />
          );
        })}
      <div className= {`desktop options container container-${theme}`}>
        <p>{todos.length} items left</p>
      </div>
    </div>
);
  
}
export default TodosList;
