// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },

    completeTask: function () {
      this.complete = true;
    },
  };
  return task;
}

// for now, let's just make sure we see our tasks
//console.log(tasks);

// DRIVER CODE BELOW
const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(task1.completeTask()); // Clean Cat Litter has not been completed
//task2.completeTask();
task2.logTaskState(); // Clean Cat Litter has been completed
