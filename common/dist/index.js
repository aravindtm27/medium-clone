"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogInput = exports.createblogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
    name: zod_1.default.string().optional()
});
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string(),
});
exports.createblogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
exports.updateBlogInput = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.number()
});
