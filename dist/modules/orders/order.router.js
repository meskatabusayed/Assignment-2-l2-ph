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
exports.orderRouter = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const order_model_1 = require("./order.model");
const router = express_1.default.Router();
router.post('/', order_controller_1.orderControllers.createOrder);
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        let products;
        if (email) {
            products = yield order_model_1.Order.find({ email: { $regex: email, $options: 'i' } });
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: products
            });
        }
        else {
            products = yield order_model_1.Order.find();
            res.status(200).json({
                success: true,
                messgae: "Orders fetched successfully!",
                data: products
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Could not fached order",
            error: error
        });
    }
}));
exports.orderRouter = router;
