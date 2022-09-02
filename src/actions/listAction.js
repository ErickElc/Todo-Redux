
let id = 0;

export function addItem(item){
    id += 1;

    const it = {id: id, content: item,  done: false}

    return{type: "ADD_ITEM", payload: it};
}

export function deleteItem(id){
    return {type: "DELETE_ITEM", payload: id};
}

export function changeDone(id){
    return {type: "CHANGE_DONE", payload: id};
}