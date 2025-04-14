import { Observable } from "rxjs";

const emitValuesAndComplete$ = Observable.create((observer) => {
  observer.next("A");
  observer.next("B");
  observer.next("C");
});

emitValuesAndComplete$.subscribe(
  (result) => {
    console.log(` ${result}`);
  },
  (error) => {
    // note - this is an optional argument that allows handling errors
    console.log(" -- error");
  },
  () => {
    // note - this is an optional argument that allows handling complete action
    console.log(" -- completed");
  }
);
