import {
    HorizontalAlignment,
    VerticalAlignment, Font, LayoutUtils, LedMatrixInstance, FontInstance
} from 'rpi-led-matrix';


export class Functions {    
    matrix: LedMatrixInstance;
    font: FontInstance = new Font("defaultFont", "./fonts/6x12.bdf");
    alignmentH: HorizontalAlignment = HorizontalAlignment.Center;
    alignmentV: VerticalAlignment = VerticalAlignment.Middle;
    wait = (t: number) => new Promise(ok => setTimeout(ok, t));
    
    constructor(matrix: LedMatrixInstance) {
        this.matrix = matrix;
   
    }

    addFont(name:string, path: string)
    {
        this.font = new Font(name, path);
        this.matrix.font(this.font);
    }

    async drawSign(sign:string)
    {
        const lines = LayoutUtils.textToLines(this.font, this.matrix.width(), sign);
  
        for (let i = 10; i <= 100; i = i + 2) {
            this.matrix.brightness(i);
            LayoutUtils.linesToMappedGlyphs(lines, this.font.height(), this.matrix.width(), this.matrix.height(), this.alignmentH, this.alignmentV).map(glyph => {
                this.matrix.drawText(glyph.char, glyph.x, -24);
            });
            this.matrix.sync();
            await this.wait(100);
        }
       this.matrix.sync();
    }

    async drawText(text:string)
    {
        const lines2 = LayoutUtils.textToLines(this.font, this.matrix.width(), "Mystical Ducks");
        const glyphs2 = LayoutUtils.linesToMappedGlyphs(lines2, this.font.height(), this.matrix.width(), this.matrix.height(), this.alignmentH, this.alignmentV);
        
        this.matrix.brightness(80);
           for (const glyph of glyphs2) {
            this.matrix.drawText(glyph.char, glyph.x, glyph.y);
            this.matrix.sync();
               await this.wait(200);
           }
    }   
}
