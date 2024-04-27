It's good to bundle with this file.
```typescript
import sqlite3 from 'sqlite3'

export function add() {
  return `888` 
}

```
but with below, vite will bundle sqlite3 into, see snapshot:
<img width="211" alt="image" src="https://github.com/wenjoy/vite-bundle-issue/assets/8130908/65d13469-3b2f-4c01-a3ea-d252daad1d55">

```typescript
import sqlite3 from 'sqlite3'

export function add() {
  return `888` 
}


function init() {
   let db: sqlite3.Database;
   db = new sqlite3.Database('')
}
```
