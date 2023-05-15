var lists = []

function addList() {
    console.log(lists.length)
    var newlist = document.createElement('p')
    var parent = document.querySelector('.to-do-list')

    newlist.className='todolist'
    newlist.classList.add('list'+(lists.length + 1))
    lists.push(document.getElementById('toDoTextArea').value)
    newlist.innerHTML=`
        ${lists.length}. ${document.getElementById('toDoTextArea').value}
        <button class="center" onclick="deleteList('list${lists.length}')"></button>
    `
    parent.prepend(newlist)
}

function deleteList(list) {
    var arrnum = list.slice(4)
    lists[arrnum-1]=""
    document.querySelector(`.${list}`).remove()
    console.log(lists)
}