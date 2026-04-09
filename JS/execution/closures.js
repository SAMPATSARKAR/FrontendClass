//create a function that simulates a user session tracker.Each user should have their own private login count that
//increases everytime they access the sessions.
function createUserSessionTracker() {   
    let loginCount = 0; // This variable is private to the createUserSessionTracker function
    return function() { // This inner function forms a closure over the loginCount variable
        loginCount++; // Increment the login count each time the function is called
        console.log(`User has logged in ${loginCount} times.`);
    }
}

// const user1SessionTracker = createUserSessionTracker(); // Create a session tracker for user 1
// const user2SessionTracker = createUserSessionTracker(); // Create a session tracker for user 2

// user1SessionTracker(); // User 1 logs in (Output: User has logged in 1 times.)
// user1SessionTracker(); // User 1 logs in again (Output: User has logged in 2 times.)
// user2SessionTracker(); // User 2 logs in (Output: User has logged in 1 times.)
// user1SessionTracker(); // User 1 logs in again (Output: User has logged in 3 times.)
// user2SessionTracker(); // User 2 logs in again (Output: User has logged in 2 times.)


function createCounter(){
    let count=0;
    return function(){
        count++;
        console.log(`Count is ${count}`);
        return count;
        
    }
}
// const user1 = createCounter();
// const user2 = createCounter();
// user1();
// user2();
// user2();
// console.log("user1-"+user1());
// console.log("user2-"+user2());

function createBankAccount(){
    let balance=0;
    return {
        deposit(amount){
            balance+=amount;
            console.log(`Deposited ${amount}. Current balance: ${balance}`);
        },
        withdraw(amount){
            if(amount>balance){
                console.log("Insufficient funds");
            }
            else{
                balance-=amount;
                console.log(`Withdrew ${amount}. Current balance: ${balance}`);
            }
        },
        getBalance(){
            console.log(`Current balance: ${balance}`);
            return balance;
        }
    }     


}
const account1 = createBankAccount();
account1.deposit(100);
account1.withdraw(30);
account1.getBalance();

const account2 = createBankAccount();
account2.deposit(200);
account2.withdraw(50);
account2.getBalance();
