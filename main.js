// This code disable the right click event on the page
document.addEventListener('contextmenu', event => event.preventDefault());

var lists = []
var undo = []

function addList() {
    var newlist = document.createElement('p')
    var parent = document.querySelector('.to-do-list')
    var text = document.getElementById('toDoTextArea').value

    newlist.className='todolist'
    newlist.classList.add('list'+(lists.length + 1))
    lists.push(text)
    newlist.innerHTML=`
        ${lists.length}. ${text}
        <button class="center" onclick="deleteList('list${lists.length}')"></button>
    `
    parent.prepend(newlist)
    newlist.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    log("added",text+" | "+(lists.length))
}

function deleteList(list) {
    var todelete = document.querySelector(`.${list}`)
    todelete.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    var arrnum = list.slice(4)
    undo.push(arrnum+"|"+lists[arrnum-1])
    lists[arrnum-1]=""
    todelete.classList.add("exit")
    setTimeout(() => {
        todelete.remove()
    }, 500);
    console.log(lists,undo)
}

function log(action,text){
    console.log(new Date().toISOString().slice(11,-5)+" - "+action+"() "+text)
}