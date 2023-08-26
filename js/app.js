const addBtn = document.querySelector('#addBtn')
const input = document.querySelector('#myInput')
const todoSection = document.querySelector('.todo-items')
const errorBox = document.querySelector('#errorBox')
let todoListItem = []

const doneItem = (event)=>{
 const todoItemClicked = event.target.parentElement.parentElement
 todoItemClicked.classList.remove('todo-item')
 todoItemClicked.classList.add('done-item')
 event.target.classList.add('hidden')
 todoItemClicked.firstElementChild.classList.add('line-through')
}

const loadTodoListItem = () => {
  const itemData = JSON.parse(localStorage.getItem("todoItems"))

  if(itemData){

    todoListItem = [...itemData]

    itemData.forEach(item => {
    
      let todoItem = document.createElement('div')
  
      if(!item.status){
        todoItem.classList.add('todo-item')
        todoItem.innerHTML = `
        <span>${item.title}</span>
        <div>
          <button class="done-btn"> done </button>
          <button class="remove-btn"> remove </button>
        </div>
        `
      }
      else{
        todoItem.classList.add('done-item')
        todoItem.innerHTML = `
        <span>${item.title}</span>
        <div>
          <button class="done-btn hidden"> done </button>
          <button class="remove-btn"> remove </button>
        </div>
        `
      }
  
      todoSection.append(todoItem)
  
      const doneBtn = todoItem.querySelector('.done-btn')
      const removeBtn = todoItem.querySelector('.remove-btn')
  
      doneBtn.addEventListener('click' , (event) => {
        doneItem(event)
      } )
  
      removeBtn.addEventListener('click' , () => {
        removeItem(todoItem)
      } )
  
  
    });
  }
 
}

const removeItem = (TodoItem)=>{
    const index = todoListItem.findIndex( 
      item => item.title === TodoItem.firstElementChild.innerText)

      if (index > -1) {
        todoListItem.splice(index, 1); 
      }
      localStorage.setItem("todoItems" , JSON.stringify(todoListItem) )

  TodoItem.remove()
}

addBtn.addEventListener('click' , () => {

    try {
      
      const todoItemTitle = input.value
      if(!todoItemTitle || todoItemTitle.length < 3){
        throw { message : "input is empty" }
      }

      todoListItem.push({
        title : todoItemTitle ,
        status : 0
      })

      console.log(todoListItem);

     localStorage.setItem("todoItems" , JSON.stringify(todoListItem) )


      let todoItem = document.createElement('div')
      todoItem.classList.add('todo-item')
      let title = document.createElement('span')
      title.innerText = todoItemTitle
      todoItem.append(title)
      let Btns = document.createElement('div')
     
      let doneBtn = document.createElement('button')
      doneBtn.classList.add("done-btn")
      doneBtn.innerText = "done"
     
      doneBtn.addEventListener('click' , (event) => {
        doneItem(event)
      } )
     
    
      let removeBtn = document.createElement('button')
      removeBtn.classList.add("remove-btn")
      removeBtn.innerText = "remove"
     
      removeBtn.addEventListener('click' , () => {
        removeItem(todoItem)
      } )
     
     
      Btns.append(doneBtn)
      Btns.append(removeBtn)
      todoItem.append(Btns)
     
      todoSection.append(todoItem)



    } 
    catch (error) {
      errorBox.innerText = error.message
      errorBox.classList.remove('hidden')
    }

})

input.addEventListener('keydown' , (event)=>{
  if (event.code === "Enter"){
    try {
      
      const todoItemTitle = input.value
      if(!todoItemTitle || todoItemTitle.length < 3){
        throw { message : "input is empty" }
      }
  
      todoListItem.push({
        title : todoItemTitle ,
        status : 0
      })
  
      console.log(todoListItem);
  
     localStorage.setItem("todoItems" , JSON.stringify(todoListItem) )
  
  
      let todoItem = document.createElement('div')
      todoItem.classList.add('todo-item')
      let title = document.createElement('span')
      title.innerText = todoItemTitle
      todoItem.append(title)
      let Btns = document.createElement('div')
     
      let doneBtn = document.createElement('button')
      doneBtn.classList.add("done-btn")
      doneBtn.innerText = "done"
     
      doneBtn.addEventListener('click' , (event) => {
        doneItem(event)
      } )
     
    
      let removeBtn = document.createElement('button')
      removeBtn.classList.add("remove-btn")
      removeBtn.innerText = "remove"
     
      removeBtn.addEventListener('click' , () => {
        removeItem(todoItem)
      } )
     
     
      Btns.append(doneBtn)
      Btns.append(removeBtn)
      todoItem.append(Btns)
     
      todoSection.append(todoItem)
  
  
  
    } 
    catch (error) {
      errorBox.innerText = error.message
      errorBox.classList.remove('hidden')
    }
  }
})


loadTodoListItem()



const users = [
  {
    name: "mohammad",
    age : 23 ,
  },
  {
    name: "saba",
    age : 15 ,
  },
  {
    name: "amir",
    age : 30 ,
  },
  {
    name: "tina",
    age : 23 ,
  },
  {
    name: "helia",
    age : 25 ,
  }
]

let search = 'ia'

console.log(users.findIndex (user => user.name === "tina" ) );


// console.log(numbers );
