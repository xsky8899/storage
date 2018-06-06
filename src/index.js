class Storage {
	constructor(storage) {
		// local session
		this.storage = storage;
	}
	set(key, val) {
		this.storage.setItem(key, val);
	}
	get(key) {
		this.storage.getItem(key);
	}
}

window.Storage = Storage;