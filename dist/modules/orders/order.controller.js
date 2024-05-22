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
exports.orderControllers = void 0;
const order_validation_joi_1 = require("./order.validation.joi");
const mongoose_1 = __importDefault(require("mongoose"));
const product_model_1 = require("../products/product.model");
const order_model_1 = require("./order.model");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = order_validation_joi_1.createOrderSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: "Order Validation error",
                details: error.details
            });
        }
        const { email, productId, price, quantity } = req.body;
        if (!mongoose_1.default.Types.ObjectId.isValid(productId)) {
            return res.status(404).json({
                success: false,
                message: `Order not found ${productId}`
            });
        }
        const product = yield product_model_1.Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                success: false,
                message: `product not found`
            });
        }
        if (quantity > product.inventory.quantity) {
            return res.status(400).json({
                success: false,
                message: "Insufficient quantity available in inventory"
            });
        }
        const newOrder = new order_model_1.Order({
            email, productId, price, quantity
        });
        product.inventory.quantity -= quantity;
        if (product.inventory.quantity === 0) {
            product.inventory.inStock = false;
        }
        yield product.save();
        const savedOrder = yield newOrder.save();
        const savedOrderObject = savedOrder.toObject();
        delete savedOrderObject._id;
        delete savedOrderObject.__v;
        res.status(201).json({
            success: true,
            message: 'Order created successfully!',
            data: savedOrder,
        });
    }
    catch (err) {
        if (err.name === 'CastError' && err.kind === 'ObjectId') {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }
    }
});
exports.orderControllers = {
    createOrder
};
