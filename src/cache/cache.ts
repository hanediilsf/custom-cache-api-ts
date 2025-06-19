type CacheItem = {
  value: any;
  expiration: number;
};

export function createCache(ttl: number = 5000) {
  const store = new Map<string, CacheItem>();

  function set(key: string, value: any) {
    store.set(key, {
      value,
      expiration: Date.now() + ttl,
    });
  }

  function get(key: string): any | null {
    const item = store.get(key);
    if (!item) return null;

    if (Date.now() > item.expiration) {
      store.delete(key);
      return null;
    }

    return item.value;
  }

  return { set, get };
}
