/**
 *  判斷:
 * 👉 每一題請判斷 4 件事：
 * ❓ 有沒有 Closure
 * ❓ this 會不會壞掉
 * ❓ method 在 prototype 還是 instance
 * ❓ 實務上 會不會出 bug
 * 
 * 你可以用這種格式回答（不用太長）：
 * A：closure ✅ / this ❌ / prototype ✅ / 有 bug ❌
 */

// A. 最常見 callback
{
  class UserService {
    name = 'George';

    // using arrow function.
    logLaterWithArrowFunction() {
      setTimeout(() => {
        console.log(this.name);        
      }, 100);
    }

    // without arrow function.
    logLater() {
      setTimeout(function () {
        console.log(this.name);        
      }, 100);
    }
  }

  const u = new UserService();
  u.logLater(); // undefined
  u.logLaterWithArrowFunction(); // George

  /**
   * 有沒有 closure: 
   * this 會不會壞掉:
   * method 在 prototype?:
   * 會不會出 bug?:
   */
}


// factory function.
{
  function createUser(name) {
    return {
      getName() {
        return name;
      }
    };
  }

  const user = createUser('george');
  console.log('user =', user.getName());  

  /**
   * 有沒有 closure: 
   * this 會不會壞掉:
   * method 在 prototype?:
   * 會不會出 bug?:
   */
}


// return function
{
  class Counter {
    counter = 0;

    getIncrement() {
      return function() {
        return ++this.counter; // error? 
      }; 
    }

    getIncrementWithArrowFunction() {
      return () => {
        return ++this.counter;
      }; 
    }
  }

  const c = new Counter();
  // const inc = c.getIncrement(); // error
  const inc = c.getIncrementWithArrowFunction();
  console.log(inc()); // 1

  /**
   * 有沒有 closure: 
   * this 會不會壞掉:
   * method 在 prototype?:
   * 會不會出 bug?:
   */
}

