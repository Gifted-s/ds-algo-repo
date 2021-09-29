// Adewumi Sunkanmi 2021
const Queue = require("../Queue-Implentations/queue-from-array")
const Stack = require("../Stack-Implementations/stack-from-array")
const SCHEDULAR_TYPE = Object.freeze({
    PRIORITY: "PRIORITY",
    STACK: "STACK",
    QUEUE: "QUEUE"
})

class CPUSchedular {
    constructor(tasks, schedular_type) {
        this.SCHEDULAR_DECISOR;
        this.TASKS_NO = 0
        switch (schedular_type) {
            case SCHEDULAR_TYPE.PRIORITY:
                this.SCHEDULAR_DECISOR = new TaskPriorityQueue()
                break;
            case SCHEDULAR_TYPE.QUEUE:
                this.SCHEDULAR_DECISOR = new TaskQueue()
                break;
            case SCHEDULAR_TYPE.STACK:
                this.SCHEDULAR_DECISOR = new TaskStack()
                break;
            default:
                break;
        }
        for (let i = 0; i < tasks.length; i++) {
            if (schedular_type === SCHEDULAR_TYPE.PRIORITY) if (!tasks[i].priority) throw new Error(`Priority not found on a task ${i + 1} while using schedular type: Priority`)
            this.SCHEDULAR_DECISOR.addNewCPUTask(tasks[i])
            this.TASKS_NO++
        }
    }
    run() {
        let process_output =[]
        let task_no = 0
        while (task_no < this.TASKS_NO) {
            let task = this.SCHEDULAR_DECISOR.getNextCPUTask()
           process_output.push(task.process())
            task_no++
        }
        console.log(process_output)
        return process_output
    }
}




class TaskQueue {
    constructor() {
        this.queue = new Queue()
    }
    addNewCPUTask(task) {
        this.queue.enqueue(task)
    }
    getNextCPUTask() {
        return this.queue.dequeue()
    }
}

class TaskStack {
    constructor() {
        this.stack = new Stack()
    }
    addNewCPUTask(task) {
        this.stack.push(task)
    }
    getNextCPUTask() {
        return this.stack.pop()
    }
}


const leftChildInd = (i) => (2 * i) + 1
const rightChildInd = (i) => (2 * i) + 2
const parentInd = (i) => Math.floor((i - 1) / 2)

class TaskPriorityQueue {
    constructor() {
        this.heap = []
    }

    swap(ind1, ind2) {
        let temp = this.heap[ind1]
        this.heap[ind1] = this.heap[ind2]
        this.heap[ind2] = temp
    }
    addNewCPUTask(task) {
        this.heap.push(task)
        if (this.heap.length === 0) {
            return true
        }
        let index = this.heap.length - 1
        while (index !== 0 && this.heap[parentInd(index)].priority < this.heap[index].priority) {
            this.swap(parentInd(index), index)
            index = parentInd(index)

        }
    }
    getNextCPUTask() {
        let current_task = this.heap.shift()
        this.heap.unshift(this.heap[this.heap.length - 1])
        this.heap.pop()
        this.heapify(0)
        return current_task
    }
    heapify(root) {
        let smallest = root
        let left_index = leftChildInd(smallest)
        let right_index = rightChildInd(smallest)
        if ( this.heap[left_index]&& this.heap[left_index].priority > this.heap[smallest].priority) {
            smallest = left_index
        }
        if (this.heap[right_index] && this.heap[right_index] && this.heap[right_index].priority > this.heap[smallest].priority) {
            smallest = right_index
        }
        if (smallest !== root) {
            this.swap(smallest, root)
            this.heapify(smallest)
        }
    }
}


const schedular = new CPUSchedular(
    [
        {
            priority: 10,
            process: function () {
                return 10
            }
        },
        {
            priority: 6,
            process: function () {
                return 6
            }
        },
        {
            priority: 31,
            process: function () {
                return 31
            }
        },
        {
            priority: 5,
            process: function () {
                return 5
            }
        },
        {
            priority: 9,
            process: function () {     
                return 9
            }
        },
        {
            priority: 7,
            process: function () {
                return 7
            }
        }
    ],
    SCHEDULAR_TYPE.PRIORITY
)
module.exports = CPUSchedular