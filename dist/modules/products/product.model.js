"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const tVarientSchema = new mongoose_1.Schema({
    type: { type: String, require: true },
    value: { type: String, require: true }
});
const tInventorySachema = new mongoose_1.Schema({
    quantity: { type: Number, require: true },
    inStock: { type: Boolean, require: true },
});
const tProductSchema = new mongoose_1.Schema({
    name: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    category: { type: String, require: true },
    tags: { type: [String], require: true },
    variants: { type: [tVarientSchema] },
    inventory: { type: tInventorySachema }
});
exports.Product = (0, mongoose_1.model)("Product", tProductSchema);
