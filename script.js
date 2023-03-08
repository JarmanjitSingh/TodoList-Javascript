let input = document.getElementById('taskName')
let taskContainer = document.getElementById('taskContainer')
let unorderedList = document.getElementById('tasks')

        const todo = () => {
        
                let a = input.value;

                if( a == ""){
                        alert('Please add your task in field....')
                        return
                }
                
                // Creating a list in unordered list 
                let list = document.createElement('li');
                list.className = 'item';

                list.innerHTML = `
                <span class='task-padd'>${a}</span>
                    <div class="buttons">
                        <span class="didit" onclick="didit(this)">Done</span>
                        <span class="close" onclick="delList(this)">&#10008;</span> 

                    </div>
                `
                unorderedList.appendChild(list);
                input.value = "";

        }

        //// For done buttton //////
        const didit = (e)=> {
                let diditParentElement = e.parentElement;
                let listElement = diditParentElement.parentElement;
                let listElementsFirstSpan = listElement.firstElementChild
                       
                listElementsFirstSpan.classList.toggle('line-through');

                console.log(listElementsFirstSpan)
        }

        //// For Delete button //////
        const delList = (e)=> {
                let closeParentElement = e.parentElement;
                let listElement = closeParentElement.parentElement;
                console.log(listElement)
                
                listElement.style.display = 'none';
                console.log('close')
        }

      