"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productServices = void 0;
const product_model_1 = require("./product.model");
const createProduct = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(payLoad);
    return result;
});
const getSpecificProduct = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findById({ _id, isDelete: { $ne: true } });
    return result;
});
//update Product By Id
const updateProductById = (_id, updatedProduct) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(_id, updatedProduct, { new: true });
    return result;
});
//delete product
const deleteProductById = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndDelete(productId, { isDelete: { $ne: true } });
    return result;
});
//search product
// const searchTermProduct = async (searchTerm: String) => {
//     const results = await Product.find({
//         $or: [
//             { name: { $regex: searchTerm, $options: 'i' } },
//             { description: { $regex: searchTerm, $options: 'i' } }
//         ]
//     });
//     return results;
// }
exports.productServices = {
    createProduct,
    getSpecificProduct,
    updateProductById,
    deleteProductById,
};
