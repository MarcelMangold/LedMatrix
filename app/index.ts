
import {
    HorizontalAlignment,
    VerticalAlignment, Font, LayoutUtils, LedMatrix
} from 'rpi-led-matrix';
import { matrixOptions, runtimeOptions } from './config/config';

const wait = (t: number) => new Promise(ok => setTimeout(ok, t));
let alignmentH: HorizontalAlignment = HorizontalAlignment.Center;
let alignmentV: VerticalAlignment = VerticalAlignment.Middle;

const Colors = {
    Aquamarine: 0x7FFFD4,
    Black: 0x000000,
    Blue: 0x0000FF,
    Cyan: 0x00FFFF,
    Green: 0x00FF00,
    Magenta: 0xFF00FF,
    Purple: 0x800080,
    Red: 0xFF0000,
    White: 0xFFFFFF,
    Yellow: 0xFFFF00,
};


(async () => {
    try {
        const matrix = new LedMatrix(matrixOptions, runtimeOptions);
        const font = new Font('10x20.bdf', './fonts/6x10.bdf');
        matrix.font(font);

        matrix
            .clear()            // clear the display
            .brightness(100)    // set the panel brightness to 100%
            .fgColor(0x0000FF)  // set the active color to blue
            .fill()
        matrix.sync();



        await wait(3000);

        matrix
            .clear()
            .sync();
        const lines = LayoutUtils.textToLines(font, matrix.width(), "Marcel ist ein cooler dude!");
        const glyphs = LayoutUtils.linesToMappedGlyphs(lines, font.height(), matrix.width(), matrix.height(), alignmentH, alignmentV);

        for (const glyph of glyphs) {
            matrix.drawText(glyph.char, glyph.x, glyph.y);
            matrix.sync();
            await wait(150 * Math.random() + 20);
        }

        LayoutUtils.linesToMappedGlyphs(lines, font.height(), matrix.width(), matrix.height(), alignmentH, alignmentV).map(glyph => {
            matrix.drawText(glyph.char, glyph.x, glyph.y);
        });


        matrix.sync();

        await wait(80000);
    }
    catch (error) {
        console.error(`caught: `, error);
    }
})();