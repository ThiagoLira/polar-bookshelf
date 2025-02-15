"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StorageKeyValueStore {
    constructor(storage) {
        this.storage = storage;
    }
    get(key) {
        const value = this.storage.getItem(key);
        if (value !== null) {
            return value;
        }
        return undefined;
    }
    set(key, value) {
        this.storage.setItem(key, value);
    }
}
exports.StorageKeyValueStore = StorageKeyValueStore;
class LocalStorageKeyValueStore extends StorageKeyValueStore {
    constructor() {
        super(window.localStorage);
    }
}
exports.LocalStorageKeyValueStore = LocalStorageKeyValueStore;
class SessionStorageKeyValueStore extends StorageKeyValueStore {
    constructor() {
        super(window.sessionStorage);
    }
}
exports.SessionStorageKeyValueStore = SessionStorageKeyValueStore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5VmFsdWVTdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIktleVZhbHVlU3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUF5QkEsTUFBYSxvQkFBb0I7SUFFN0IsWUFBNkIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztJQUU3QyxDQUFDO0lBRU0sR0FBRyxDQUFDLEdBQVc7UUFFbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFeEMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ2hCLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFFckIsQ0FBQztJQUVNLEdBQUcsQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUVKO0FBdEJELG9EQXNCQztBQUVELE1BQWEseUJBQTBCLFNBQVEsb0JBQW9CO0lBRS9EO1FBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0o7QUFMRCw4REFLQztBQUVELE1BQWEsMkJBQTRCLFNBQVEsb0JBQW9CO0lBRWpFO1FBQ0ksS0FBSyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0o7QUFMRCxrRUFLQyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGludGVyZmFjZSBSZWFkYWJsZUtleVZhbHVlU3RvcmUge1xuXG4gICAgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV3JpdGFibGVLZXlWYWx1ZVN0b3JlIHtcblxuICAgIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG5cbn1cblxuLyoqXG4gKiBCYXNpYyBrZXkvdmFsdWUgc3RvcmUgaW50ZXJmYWNlIGZvciB1c2luZyB3aXRoIFN0b3JhZ2UsIExvY2FsU3RvcmFnZSxcbiAqIFNlc3Npb25TdG9yYWdlIG9yIG91ciBvd24gYmFja2VuZHMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgS2V5VmFsdWVTdG9yZSBleHRlbmRzIFJlYWRhYmxlS2V5VmFsdWVTdG9yZSwgV3JpdGFibGVLZXlWYWx1ZVN0b3JlIHtcblxuXG59XG5cbi8qKlxuICogVXNlZCB3aXRoIExvY2FsU3RvcmFnZSBhbmQgU2Vzc2lvblN0b3JhZ2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBTdG9yYWdlS2V5VmFsdWVTdG9yZSBpbXBsZW1lbnRzIEtleVZhbHVlU3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdG9yYWdlOiBTdG9yYWdlKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0KGtleTogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICB9XG5cbn1cblxuZXhwb3J0IGNsYXNzIExvY2FsU3RvcmFnZUtleVZhbHVlU3RvcmUgZXh0ZW5kcyBTdG9yYWdlS2V5VmFsdWVTdG9yZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIod2luZG93LmxvY2FsU3RvcmFnZSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0b3JhZ2VLZXlWYWx1ZVN0b3JlIGV4dGVuZHMgU3RvcmFnZUtleVZhbHVlU3RvcmUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKHdpbmRvdy5zZXNzaW9uU3RvcmFnZSk7XG4gICAgfVxufVxuIl19