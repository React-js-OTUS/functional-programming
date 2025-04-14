import { debounce, debounceTime, filter, map, Subject, switchMap } from "rxjs";
import React, { useEffect } from "react";
// import {fromFetch} from "rxjs/internal/observable/dom/fetch";

export const textSubject = new Subject<any>();

export const TextInput = () => {
  useEffect(() => {
    const sub = textSubject
      .pipe(
        debounceTime(2000),
        map((event) => event.target.value),
        filter((value) => value.length < 10)
      )
      .subscribe({
        next: (result) => console.log("text", result),
      });
    return () => sub.unsubscribe();
  }, []);

  return <input onChange={(e) => textSubject.next(e)} />;
};

// export const textSubject = new Subject<any>()
// fetch('https://api.github.com/users/kaex')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// export const TextInput = () => {
//
//     useEffect(() => {
//         const sub = textSubject.pipe(
//             map(event => event.target.value),
//             filter(value => value.length < 10),
//             switchMap(input => fromFetch(`https://api.github.com/users/${input}`))
//         ).subscribe({next: text => console.log('debounceTime', text)})
//         return () => sub.unsubscribe()
//     }, [])
//
//     return <input onChange={e => textSubject.next(e)}/>
// }
