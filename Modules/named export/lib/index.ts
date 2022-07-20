export * from './foo'; // re-export all of its exports
export * from './bar'; // re-export all of its exports
import * as baz from './baz'; // import as a name

export { baz }; // export the name
