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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productControllers = void 0;
const product_services_1 = require("./product.services");
const product_validatiion_joi_1 = __importDefault(require("./product.validatiion.joi"));
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const { error, value } = product_validatiion_joi_1.default.validate(productData);
    const result = yield product_services_1.productServices.createProduct(value);
    res.json({
        sucess: true,
        message: "Product created successfully!",
        data: result
    });
});
//getSpecificData
const getSpecificProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.productServices.getSpecificProduct(productId);
        res.status(200).json({
            success: true,
            messgae: "Product fatched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fached product",
            error: error
        });
    }
});
//Update Product
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const updatedProduct = req.body;
        const result = yield product_services_1.productServices.updateProductById(productId, updatedProduct);
        res.status(200).json({
            success: true,
            messgae: "Product updated successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fached product",
            error: error
        });
    }
});
//product Delete
const deleteProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const result = yield product_services_1.productServices.deleteProductById(productId);
        res.status(200).json({
            success: true,
            messgae: "Product deleted successfully!",
            data: null
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fached product",
            error: error
        });
    }
});
exports.productControllers = {
    createProduct,
    getSpecificProduct,
    updateProductById,
    deleteProductById,
};
