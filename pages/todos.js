// 46:00

import React, { useEffect, useState } from "react";

const todos = () => {

    const [todos, setTodos] = useState([])
  useEffect(() => {
    let todos = localStorage.getItem("todos")
    setTodos(JSON.parse(todos))
  }, [])
  


  const deleteTodo = (title) => { 
    let newtodos = todos.filter(item =>{
        return item.title != title
    })
    localStorage.setItem("todos", JSON.stringify(newtodos))
    setTodos(newtodos)
   }

   const editToDo = (first) => { second }
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-4xl font-medium title-font mb-4 text-gray-900">
            YOUR TODOS
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Your Todos will show up here.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          {todos.map((item) => {
            return (
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={'https://picsum.photos/600/900?a=${item.title}'}
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900">
                      {item.title}
                    </h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">{item.desc}</p>
                    <span class="inline-flex">
                      <a class="text-gray-500 cursor-pointer" onClick={()=>{deleteTodo(item.title)}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          id="delete"
                        >
                          <path fill="none" d="M0 0h24v24H0V0z"></path>
                          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-500 cursor-pointer" onClick={editToDo}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 16 16"
                          id="edit"
                        >
                          <path
                            fill="#212121"
                            d="M12.2417871,6.58543288 L6.27024769,12.5583865 C5.94985063,12.8787836 5.54840094,13.1060806 5.1088198,13.2159758 L2.81782051,13.7887257 C2.45163027,13.8802732 2.11993389,13.5485768 2.21148144,13.1823866 L2.78423127,10.8913873 C2.89412655,10.4518062 3.12142351,10.0503565 3.44182056,9.72995942 L9.41336001,3.75700576 L12.2417871,6.58543288 Z M13.6567078,2.3434993 C14.4377564,3.12454789 14.4377564,4.39087785 13.6567078,5.17192643 L12.9488939,5.8783261 L10.1204668,3.04989898 L10.8282807,2.3434993 C11.6093293,1.56245072 12.8756592,1.56245072 13.6567078,2.3434993 Z"
                          ></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default todos;
