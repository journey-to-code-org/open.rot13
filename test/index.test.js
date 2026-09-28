import test from "node:test";
import assert from "node:assert/strict";
import { rot13 } from "../src/index.js";
test("encodes",()=>assert.equal(rot13("Hello, World!"),"Uryyb, Jbeyq!"));
test("is self inverse",()=>assert.equal(rot13(rot13("secret")),"secret"));
