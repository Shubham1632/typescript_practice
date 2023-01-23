"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
class List {
    constructor(data) {
        this.data = [...data];
    }
    setdata(data) {
        this.data = [...data];
    }
    addelement(element) {
        this.data.push(element);
    }
    getdata() {
        return [...this.data];
    }
}
exports.List = List;
