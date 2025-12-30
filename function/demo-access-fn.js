/**
 * 儲存函式: 可能會需要儲存一些函式 (可能相關但不同的函式)，通常例子就是 callback function. 
 *  - 1. API 重試機制 (Retry System)
 *  - 2. Event System (整個前端都是 callback, React / NestJS / MQ 都是這個)
 *  - 3. 權限守門員 (Auth Guard)
 * 
 * 基本上就是使用 [], {} 的資料結構來存儲狀態
 *  - 有可能是 key-value or array
 *  - 一個註冊的 function
 *  - 建立另一個 function 來呼叫
 */

{
  // 1. API 重試機制 (Retry System)
  const retryQueue = [];

  function retryable(fn) {
    retryQueue.push(fn); // 🔒 儲存 function
  }

  async function runRetryQueue() {
    while (retryQueue.length) {
      const job = retryQueue.shift();
      try {
        await job();        // ⏰ 未來某時才執行
      } catch {
        retryQueue.push(job);   // 再塞回去
      }
    }
  }

  retryable(() => callPaymentAPI());
  retryable(() => callInventoryAPI());
  setInterval(runRetryQueue, 3000); // 你已經在做：延遲執行系統 / Job Queue
}

{
  // 2. Event System (整個前端都是 callback, React / NestJS / MQ 都是這個)
  // 不是馬上要執行，而是： 「當 X 發生時，請幫我執行 Y」
  const listeners = {};

  function on(event, handler) {
    listeners[event] ??= []; // a ??= b 的意思是： 當 a 是 null 或 undefined 時，才把 b 指派給它
    listeners[event].push(handler);   // 🔒 儲存 function
  }

  // a ??= b 等價於
  // if (listeners[event] === null || listeners[event] === undefined) {
  //   listeners[event] = [];
  // }
  
  function emit(event, data) {
    listeners[event]?.forEach(fn => fn(data));
  }

  // event: user.created
  on('user.created', user => {
    console.log('sendWelcomeMail(user)...');
  });
  
  on('user.created', user => {
    console.log('createWallet(user);...');
  });
  
  emit('user.created', { id: 1 });   
  // sendWelcomeMail(user)...
  // createWallet(user);...
}


{
  // 3. 權限守門員 (Auth Guard)
  const guards = {};

  function registerGuard(route, guardFn) {
    guards[route] = guardFn;      // 🔒 儲存權限函式
  }

  function handleRequest(route, user) {
    const guard = guards[route];

    if (!guard(user)) throw '403';
    return "OK";
  }

  registerGuard('/admin', u => u.role === 'admin');
  registerGuard('/profile', u => u.id != null);
  // handleRequest('/admin', { id: 1, role: 'user' }); // ❌
  const res = handleRequest('/admin', { id: 1, role: 'admin' });
  console.log(res); // OK
  // NestJS Guard 就是這一套。
}