// No 1
// Write an asynchronous function that accepts a message string and a delay time in milliseconds.
//  The function should log the message to the console after the specified delay time.

async function outputmessage(message,delay){
    await new Promise(resolve=>setTimeout(resolve,delay));
    console.log(message);
}
outputmessage("I love coding",4000);


// No 2
// You have an array of user IDs and a function getUserData(id) that returns a Promise with
//  user data when given a user ID. Write an asynchronous function that fetches and logs 
// the data for each user ID one by one, in sequence.


async function getAndLog(userIds) {
    for (const userId of userIds) {
      const userInfo = await(userId);
      console.log(userInfo);
    }
  }
  const userIds = [67, 405, 7168];
async function info() {
  try {
    await getAndLog(userIds);
  } catch (e) {
    console.error(e);
  }
}
info();

// No3
// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if there's an error.
//  Write a function that calls performTask() and logs a custom success message
//  if the task is successful, and a custom error message if there's an error.


function performTask() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          resolve();
        } else {
          reject(new Error("Task failed!"));
        }
      }, 2000);
    });
  }

  async function handleTask() {
    try {
      await performTask();
      console.log("Task completed successfully!");
    } catch (error) {
      console.error("Error occurred during task:", error);
    }
  }

  handleTask();