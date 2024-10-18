import Dexie, { EntityTable } from 'dexie';

export interface Time {
  id: number;
  timestamp: number;
}

export const db = new Dexie('myDatabase') as Dexie & {
  time: EntityTable<
    Time,
    'id'
  >;
};

db.version(1).stores({
  time: '++id, timestamp'
});

db.on('close', () => {
  alert("Database forcibly closed");
});

// uncaught promise rejection
window.addEventListener('unhandledrejection', function(event) {
  alert("Uncaught promise rejection: " + event.reason);
});

console.log("Init");