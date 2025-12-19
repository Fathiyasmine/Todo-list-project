export default function reducer(currentTodos, action) {
 switch(action.type){
    case:"added":{

    }
    default:{
        throw Error("Unknown action: " + action.type);
    }
 }
    return [];
}
