
function createMockStorage() {
  let store = {};
  return new Proxy({}, {
      set(obj, prop, value) {
          store[prop] = value.toString();
          return true; // Indicate success
      },
      get(obj, prop) {
          if (prop === 'getItem') {
              return (key) => store[key] || null;
          }
          if (prop === 'setItem') {
              return (key, value) => { store[key] = value.toString(); };
          }
          if (prop === 'removeItem') {
              return (key) => { delete store[key]; };
          }
          if (prop === 'clear') {
              return () => { store = {}; };
          }
          if (prop === 'key') {
              return (index) => Object.keys(store)[index] || null;
          }
          if (prop === 'length') {
              return Object.keys(store).length;
          }
          throw new TypeError(`'${prop}' is not a valid property of localStorage`);
      },
      ownKeys(target) {
          return Object.keys(store);
      },
      getOwnPropertyDescriptor(target, prop) {
          if (store.hasOwnProperty(prop)) {
              return {
                  enumerable: true,
                  configurable: true,
              };
          }
      },
  });
}

// Create both storages
export const mockSessionStorage = createMockStorage();
export const mockLocalStorage = createMockStorage();
  