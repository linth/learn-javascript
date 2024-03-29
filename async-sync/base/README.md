# JavaScript 非同步函數

## 常見使用場景
它們解決了以下問題，並在許多情況下有用：

1. 處理網路請求：當您需要從伺服器獲取數據或將數據發送到伺服器時，通常需要進行網路請求。這些請求是非同步的，因此您可以使用非同步函式來處理它們，以便在等待回應時不會阻塞應用程式的其他部分。

2. 檔案操作：讀取或寫入檔案通常是一個耗時的操作，因此它們也是非同步的。非同步函式可以用於處理檔案操作，以確保應用程式的響應性不受影響。

3. 定時操作：如果您需要在一段時間後執行某個操作，例如定時器或延遲執行，那麼非同步函式可以幫助您編寫代碼來執行這些操作，而不會阻塞主線程。

4. 多任務並行處理：有時，您可能需要同時執行多個任務，例如同時發起多個網路請求或同時處理多個資料庫查詢。非同步函式可以使並行處理變得更容易，以提高性能。

5. 事件處理：在Web應用程式中，使用者觸發的事件（例如點擊、滑鼠移動、鍵盤輸入）通常會觸發callback函式，這些callback函式可以是非同步的，以確保使用者介面的響應性。

6. 避免阻塞：在執行長時間運行的計算或迴圈時，如果在主線程上同步執行，可能會導致應用程式的阻塞。通過使用非同步函式，您可以將這些任務移到背景線程，從而避免阻塞主線程。

總之，JavaScript中的非同步函式允許您處理非同步操作，以確保應用程式在執行這些操作時仍然保持響應性。這對於編寫現代Web應用程式、處理I/O操作和提高性能都非常重要。


---

## 名詞定義

### Parallelism: 平行(台灣)、并行(中國)
平行處理是指同時執行多個任務或操作，使它們同時進行，以提高性能和效率。在計算領域，這通常涉及多個處理單元（例如多核處理器）或多個計算資源同時執行不同的任務。

### Concurrency: 並行(台灣)、并发(中國)
並行是指在一段時間內執行多個任務，這些任務可能會交替執行，但並不一定同時進行。它通常用於處理多個任務之間的相對獨立性，例如同時運行多個線程來處理多個請求。


### Coroutine: 協程
用於實現非同步和並行操作 (async, concurrency)。它的主要目的是讓 program 在需要時能夠暫停執行和恢復執行，而不需要額外的 thread 或 process。這使得協程非常適合處理具有高度並行性和非同步性質的應用，例如網路通訊、IO操作、多用戶伺服器等等。


- 平行關注於同時執行多個任務，以提高性能。
- 並行關注於在一段時間內執行多個任務，它們可能會交錯執行。
- 協程是一種用於高度並行和非同步編程的機制，它允許函數在需要時暫停和恢復執行，以更高效地處理任務。


[並行程式設計: 概念](https://hackmd.io/@sysprog/concurrency-concepts)