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
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const product_model_1 = require("./product.model");
const router = express_1.default.Router();
router.post('/', product_controller_1.productControllers.createProduct);
router.get('/:productId', product_controller_1.productControllers.getSpecificProduct);
router.put('/:productId', product_controller_1.productControllers.updateProductById);
router.delete('/:productId', product_controller_1.productControllers.deleteProductById);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        let products;
        if (searchTerm) {
            products = yield product_model_1.Product.find({ name: { $regex: searchTerm, $options: 'i' } });
            res.status(200).json({
                success: true,
                message: `Products matching search term '${searchTerm}' fetched successfully!`,
                data: products
            });
        }
        else {
            products = yield product_model_1.Product.find();
            res.status(200).json({
                success: true,
                messgae: "Products fetched successfully!",
                data: products
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fached product",
            error: error
        });
    }
}));
exports.productsRouter = router;
