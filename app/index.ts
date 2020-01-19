
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
        const font = new Font('10x20.bdf', './fonts/mysticalDuck-64.bdf');
        matrix.font(font);

        matrix
            .clear()            // clear the display
            .brightness(50)    // set the panel brightness to 100%
            .fgColor(0x0000FF)  // set the active color to blue
            .fill()
        matrix.sync();
        await wait(3000);
        console.log(matrix.width() + "-- height" + matrix.height());
        matrix
            .fgColor(0xFFFF00)
        let x = 0;
        let y = 0;
        for (let i = 1; i <= matrix.height() / 2; i++) {
            matrix.drawRect(x, y, matrix.width() - i - x, matrix.height() - i - y);
            x++;
            y++;
            await wait(120);
            matrix.sync();
        }
        // set the active color to yellow
        matrix
            .fgColor(Colors.Red)
            .fill()
            .sync();

        await wait(250);
        matrix
            .clear()
            .fgColor(Colors.Blue)
            .sync();
        const lines = LayoutUtils.textToLines(font, matrix.width(), "A");

        matrix.clear();
        matrix
            .brightness(50);
        await wait(100);
        matrix
            .brightness(0);
        await wait(250);




        for (let i = 10; i <= 100; i = i + 2) {
            matrix.brightness(i);
            LayoutUtils.linesToMappedGlyphs(lines, font.height(), matrix.width(), matrix.height(), alignmentH, alignmentV).map(glyph => {
                matrix.drawText(glyph.char, glyph.x, glyph.y);
            });
            matrix.sync();
            await wait(100);
        }


        matrix.sync();
        matrix.clear();

        const normalFont = new Font('tom.bdf', './fonts/7x14.bdf');
        matrix.font(normalFont);
        const lines2 = LayoutUtils.textToLines(normalFont, matrix.width(), "Mystical Ducks");
        const glyphs2 = LayoutUtils.linesToMappedGlyphs(lines2, normalFont.height(), matrix.width(), matrix.height(), alignmentH, alignmentV);
 

           for (const glyph of glyphs2) {
               matrix.drawText(glyph.char, glyph.x, glyph.y);
               matrix.sync();
               await wait(150 * Math.random() + 20);
           }

        


        await wait(80000);
    }
    catch (error) {
        console.error(`caught: `, error);
    }
})();