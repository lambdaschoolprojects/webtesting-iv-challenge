const db = require('../Data/dbConfig');
const Tasks = require('./TasksModel');

describe('Tasks model', () => {
   afterEach(async () => {
      //cleanup
      await db('tasks').truncate();
   });
   it('gets all tasks from the database', async () => {
      const tasks = await Tasks.getAll();

      console.log(tasks);

      expect(tasks).not.toBeNull();
      expect(tasks).not.toBeUndefined();
   }) ;
   it('adds a task to the database', async () => {
      const testTask = {
         id: 1,
         title: "Test task",
         completed: false
      }
      const newTask = await Tasks.insert(testTask);
      const tasks = await db('tasks');
      console.log("****** =>", tasks);

      //expect(db('tasks').length).toBe(1);
      expect(newTask[0]).toBe(1);
   })
});