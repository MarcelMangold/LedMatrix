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
var config_1 = require("./config/config");
var functions_1 = require("./helper/functions");
var wait = function (t) { return new Promise(function (ok) { return setTimeout(ok, t); }); };
var alignmentH = rpi_led_matrix_1.HorizontalAlignment.Center;
var alignmentV = rpi_led_matrix_1.VerticalAlignment.Middle;
var functions;
var Colors = {
    Aquamarine: 0x7FFFD4,
    Black: 0x000000,
    Blue: 0x0000FF,
    Cyan: 0x00FFFF,
    Green: 0x00FF00,
    Magenta: 0xFF00FF,
    Purple: 0x800080,
    Red: 0xFF0000,
    White: 0xFFFFFF,
    Yellow: 0xFFFF00
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var matrix, x, y, i, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 12, , 13]);
                matrix = new rpi_led_matrix_1.LedMatrix(config_1.matrixOptions, config_1.runtimeOptions);
                functions = new functions_1.Functions(matrix);
                functions.addFont('MysticalDuckFont', './fonts/mysticalDuck-64.bdf');
                //start screen
                matrix
                    .clear()
                    .brightness(50)
                    .fgColor(0x0000FF)
                    .fill();
                matrix.sync();
                return [4 /*yield*/, wait(3000)];
            case 1:
                _a.sent();
                //change screen from blue to yellow with rectangles
                matrix
                    .fgColor(0xFFFF00);
                x = 0;
                y = 0;
                i = 1;
                _a.label = 2;
            case 2:
                if (!(i <= matrix.height() / 2)) return [3 /*break*/, 5];
                matrix.drawRect(x, y, matrix.width() - i - x, matrix.height() - i - y);
                x++;
                y++;
                return [4 /*yield*/, wait(120)];
            case 3:
                _a.sent();
                matrix.sync();
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5:
                //change screen color to red
                matrix
                    .fgColor(Colors.Red)
                    .fill()
                    .sync();
                return [4 /*yield*/, wait(250)];
            case 6:
                _a.sent();
                //change screen color to aquamarine
                matrix
                    .clear()
                    .fgColor(Colors.Aquamarine)
                    .sync();
                return [4 /*yield*/, wait(100)];
            case 7:
                _a.sent();
                //set brightness and color
                matrix
                    .fgColor(Colors.Blue)
                    .sync();
                matrix
                    .brightness(50)
                    .sync();
                return [4 /*yield*/, wait(100)];
            case 8:
                _a.sent();
                matrix
                    .brightness(0);
                return [4 /*yield*/, wait(250)];
            case 9:
                _a.sent();
                return [4 /*yield*/, functions.drawSign('A')];
            case 10:
                _a.sent();
                matrix.clear();
                functions.addFont('tom.bdf', './fonts/7x14.bdf');
                functions.drawText("Mystical Ducks");
                return [4 /*yield*/, wait(80000)];
            case 11:
                _a.sent();
                return [3 /*break*/, 13];
            case 12:
                error_1 = _a.sent();
                console.error("caught: ", error_1);
                return [3 /*break*/, 13];
            case 13: return [2 /*return*/];
        }
    });
}); })();
