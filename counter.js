class Counter {
    constructor() {
      this.count = 0;
    }
    increment() {
      this.count++;
    }
    decrement() {
      if (this.count > 0) {
        this.count--;
      }
    }
    reset() {
      this.count = 0;
    }
    getCount() {
      return this.count;
    }
  }
  const counter = new Counter();
console.log(counter.getCount());

counter.increment();
counter.increment();
console.log(counter.getCount()); 

counter.decrement();
console.log(counter.getCount()); 

counter.reset();
console.log(counter.getCount()); 