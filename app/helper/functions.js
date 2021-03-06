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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var rpi_led_matrix_1 = require("rpi-led-matrix");
var Functions = /** @class */ (function () {
    function Functions(matrix) {
        this.font = new rpi_led_matrix_1.Font("defaultFont", "./fonts/6x12.bdf");
        this.alignmentH = rpi_led_matrix_1.HorizontalAlignment.Center;
        this.alignmentV = rpi_led_matrix_1.VerticalAlignment.Middle;
        this.wait = function (t) { return new Promise(function (ok) { return setTimeout(ok, t); }); };
        this.matrix = matrix;
    }
    Functions.prototype.addFont = function (name, path) {
        this.font = new rpi_led_matrix_1.Font(name, path);
        this.matrix.font(this.font);
    };
    Functions.prototype.drawSign = function (sign) {
        return __awaiter(this, void 0, void 0, function () {
            var lines, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lines = rpi_led_matrix_1.LayoutUtils.textToLines(this.font, this.matrix.width(), sign);
                        i = 10;
                        _a.label = 1;
                    case 1:
                        if (!(i <= 100)) return [3 /*break*/, 4];
                        this.matrix.brightness(i);
                        rpi_led_matrix_1.LayoutUtils.linesToMappedGlyphs(lines, this.font.height(), this.matrix.width(), this.matrix.height(), this.alignmentH, this.alignmentV).map(function (glyph) {
                            _this.matrix.drawText(glyph.char, glyph.x, -24);
                        });
                        this.matrix.sync();
                        return [4 /*yield*/, this.wait(100)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i = i + 2;
                        return [3 /*break*/, 1];
                    case 4:
                        this.matrix.sync();
                        return [2 /*return*/];
                }
            });
        });
    };
    Functions.prototype.drawText = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var lines2, glyphs2, _i, glyphs2_1, glyph;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lines2 = rpi_led_matrix_1.LayoutUtils.textToLines(this.font, this.matrix.width(), "Mystical Ducks");
                        glyphs2 = rpi_led_matrix_1.LayoutUtils.linesToMappedGlyphs(lines2, this.font.height(), this.matrix.width(), this.matrix.height(), this.alignmentH, this.alignmentV);
                        this.matrix.brightness(80);
                        _i = 0, glyphs2_1 = glyphs2;
                        _a.label = 1;
                    case 1:
                        if (!(_i < glyphs2_1.length)) return [3 /*break*/, 4];
                        glyph = glyphs2_1[_i];
                        this.matrix.drawText(glyph.char, glyph.x, glyph.y);
                        this.matrix.sync();
                        return [4 /*yield*/, this.wait(200)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Functions;
}());
exports.Functions = Functions;
