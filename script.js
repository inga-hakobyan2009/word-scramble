const root=document.getElementById('root');
// const btnadd=document.getElementById('.btnAdd');
let updateValue=null
let lists
let mylists=[{
    id:1,
    label: 'example #1',
},{
    id:2,
    label: 'example #2',
},{
    id:3,
    label: 'example #3',
}]

mylists.forEach(item=>{

    add(item)
})
// btnadd.onclick=function (item){
//     if(updateValue){
//
//     }else{
//         add()
//     }
//
// }


function add(item){

    const label=document.querySelector('#label');
   let  obj={}
    if (item){
       obj=item
    }else{
        obj={
            id:Date.now(),
            label: label.value,

        }
        mylists.push(obj)
    }


    mylists.push(obj);
    let newText=document.createElement('div');
    newText.innerHTML=`<p>${obj.label}</p>`
    newText.classList.add('lists');
    newText.setAttribute('data-id',obj.id);
    let btnEdit=document.createElement('button');
    btnEdit.innerHTML="Edit"
    btnEdit.style.color='#495bf4'
    btnEdit.style.borderStyle='none'
    btnEdit.style.borderRadius='8px'
    btnEdit.style.backgroundColor='#DDD7D7FF'

    newText.appendChild(btnEdit)
    let btnDelete=document.createElement('button');
    btnDelete.innerHTML="Delete"
    btnDelete.style.color='#495bf4'
    btnDelete.style.borderStyle='none'
    btnDelete.style.borderRadius='8px'
    btnDelete.style.backgroundColor='#DDD7D7FF'




    newText.appendChild(btnDelete)
    root.appendChild(newText);
    btnDelete.onclick=function () {
        let id=+newText.getAttribute('data-id')
        let data=mylists.filter(list => list.id!==id)
        console.log(mylists)
        newText.remove()

    }
    btnEdit.onclick=function () {
        let id=+newText.getAttribute('data-id')
        let data=mylists.find(list => list.id!==id)
        updateValue=data
        label.value=data.label
    //     btnadd.innerHTML=`Update Item`
    }
}
// function update() {
//     console.log()
// }
