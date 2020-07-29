
var leastInterval = function(tasks, n) {
    const taskObj = createTaskObj(tasks);
    const ordered = orderTasks(tasks);
    let taskList = [order[0]]
    taskObj[ordered[0]] --;

    //add unique task ensuring that teh precding n task are diffrent than new task. 
    //if no unique tasks are avlible add idle 
        // loop through ordered to find next item that is not included 
        // in sliced (preceding n tasks)
        // if not included in subarray, add it
        // if no unique items, add idle 
    
    
};


const createTaskObj = ( tasks ) => {
    const obj = {}
    tasks.forEach( task => {
        if (obj[task]) {
            obj[task] ++;
        } else {
            obj[task] = 1;
        }
    } )
    return obj;
}

const mostCommon = (obj) => {
    let largest = null;
    for (t in obj) {
        largest = largest === null ? t : largest;
        if( obj[t] > obj[largest] ) {
           largest = t
       } 
    }
    return largest;
} 

const orderTasks = (tasks) => {
    const taskObj = createTaskObj(tasks);
    const orderedTasks = [];
    while (Object.keys(taskObj).length) {
        const largest = mostCommon(taskObj);
        orderedTasks.push(largest);
        delete taskObj[largest];    
    }
    return orderedTasks;
}

const exTasks = ["C", "B", "C", "A", "A", "B", "C"]

leastInterval(exTasks, 2)