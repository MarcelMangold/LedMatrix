"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var rpi_led_matrix_1 = require("rpi-led-matrix");
exports.matrixOptions = __assign(__assign({}, rpi_led_matrix_1.LedMatrix.defaultMatrixOptions()), { rows: 32, cols: 64, chainLength: 1, hardwareMapping: rpi_led_matrix_1.GpioMapping.Regular, parallel: 1, pixelMapperConfig: rpi_led_matrix_1.LedMatrixUtils.encodeMappers({ type: rpi_led_matrix_1.PixelMapperType.Chainlink }) });
exports.runtimeOptions = __assign(__assign({}, rpi_led_matrix_1.LedMatrix.defaultRuntimeOptions()), { gpioSlowdown: 1 });
