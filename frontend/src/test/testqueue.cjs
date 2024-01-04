"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_typescript_1 = require("queue-typescript");
var q = new queue_typescript_1.Queue("asdf", "hai");
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
console.log(q.dequeue());
