
import {
    HorizontalAlignment,
    VerticalAlignment, Font, LayoutUtils, LedMatrix
} from 'rpi-led-matrix';
import { matrixOptions, runtimeOptions } from './config/config';
import {Functions} from './helper/functions';

const wait = (t: number) => new Promise(ok => setTimeout(ok, t));
let alignmentH: HorizontalAlignment = HorizontalAlignment.Center;
let alignmentV: VerticalAlignment = VerticalAlignment.Middle;

let functions;
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
        functions = new Functions(matrix);
        functions.addFont('MysticalDuckFont', './fonts/mysticalDuck-64.bdf')
        
        //start screen
        matrix
            .clear()           
            .brightness(50)    
            .fgColor(0x0000FF)  
            .fill()
        matrix.sync();
        await wait(3000);
  
        //change screen from blue to yellow with rectangles
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

        //change screen color to red
        matrix
            .fgColor(Colors.Red)
            .fill()
            .sync();
        await wait(250);

        //change screen color to aquamarine
        matrix
            .clear()
            .fgColor(Colors.Aquamarine)
            .sync()
        await wait(100);

        //set brightness and color
        matrix
            .fgColor(Colors.Blue)
            .sync();
        matrix
            .brightness(50)
            .sync();
        await wait(100);
        matrix
            .brightness(0);
        await wait(250);

        //add mystical duck symbol
        await functions.drawSign('A');
        
        //add mystical duck text
        matrix.clear();
        functions.addFont('tom.bdf', './fonts/7x14.bdf');
        functions.drawText("Mystical Ducks");        


        await wait(80000);
    }
    catch (error) {
        console.error(`caught: `, error);
    }
})();