export class ButtonSettings{
    private _width: string;
    private _height: string;
    private _paddingLeft: string;
    private _paddingRight: string;
    private _paddingTop: string;
    private _paddingBottom: string;
    private _fontSize: string;
    private _color: string;
    private _text: string;
    private _textColor:string;

    public constructor(){
        this._width = "auto";
        this._height = "auto";
        this._paddingLeft = "15px";
        this._paddingRight = "15px";
        this._paddingTop = "5px";
        this._paddingBottom = "5px";
        this._fontSize = "12px";
        this._color = "White";
        this._text = "";
        this._textColor = "Black";
    }

    //Width Getter Setter
    public getWidth(): string{
        return this._width;
    }
    public setWidth(value: string): ButtonSettings{
        this._width = value;
        return this;
    }

    //Height Getter Setter
    public getHeight(): string{
        return this._height;
    }
    public setHeight(value: string): ButtonSettings{
        this._height = value;
        return this;
    }

    //PaddingLeft Getter Setter
    public getPaddingLeft(): string{
        return this._paddingLeft;
    }
    public setPaddingLeft(value: string): ButtonSettings{
        this._paddingLeft = value;
        return this;
    }

    //PaddingRight Getter Setter
    public getPaddingRight(): string{
        return this._paddingRight;
    }
    public setPaddingRight(value: string): ButtonSettings{
        this._paddingRight = value;
        return this;
    }

    //PaddingTop Getter Setter
    public getPaddingTop(): string{
        return this._paddingTop;
    }
    public setPaddingTop(value: string): ButtonSettings{
        this._paddingTop = value;
        return this;
    }

    //PaddingBottom Getter Setter
    public getPaddingBottom(): string{
        return this._paddingBottom;
    }
    public setPaddingBottom(value: string): ButtonSettings{
        this._paddingBottom = value;
        return this;
    }

    //Get All Paddings
    public getAllPaddings(): string{
        return this._paddingTop + " " + this._paddingRight + " " + this._paddingBottom + " " + this._paddingLeft;
    }

    //FontSize Getter Setter
    public getFontSize(): string{
        return this._fontSize;
    }
    public setFontSize(value: string): ButtonSettings{
        this._fontSize = value;
        return this;
    }

    //Color Getter Setter
    public getColor(): string{
        return this._color;
    }
    public setColor(value: string): ButtonSettings{
        this._color = value;
        return this;
    }

    //Text Getter Setter
    public getText(): string{
        return this._text;
    }
    public setText(value: string): ButtonSettings{
        this._text = value;
        return this;
    }

    //TextColor Getter Setter
    public getTextColor(): string{
        return this._textColor;
    }
    public setTextColor(value: string): ButtonSettings{
        this._textColor = value;
        return this;
    }

}