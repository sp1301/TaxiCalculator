export class TextBoxSettings{
    private _width: string;
    private _height: string;
    private _paddingLeft: string;
    private _paddingRight: string;
    private _paddingTop: string;
    private _paddingBottom: string;
    private _fontSize: string;
    private _backgroundColor: string;
    private _textAlign: string;
    private _placeHolderText: string;

    public constructor(){
        this._width = "auto";
        this._height = "auto";
        this._paddingLeft = "15px";
        this._paddingRight = "15px";
        this._paddingTop = "5px";
        this._paddingBottom = "5px";
        this._fontSize = "12px";
        this._backgroundColor = "White";
        this._textAlign = "center";
        this._placeHolderText = "";
    }

    //Width Getter Setter
    public getWidth(): string{
        return this._width;
    }
    public setWidth(value: string): TextBoxSettings{
        this._width = value;
        return this;
    }

    //Height Getter Setter
    public getHeight(): string{
        return this._height;
    }
    public setHeight(value: string): TextBoxSettings{
        this._height = value;
        return this;
    }

    //PaddingLeft Getter Setter
    public getPaddingLeft(): string{
        return this._paddingLeft;
    }
    public setPaddingLeft(value: string): TextBoxSettings{
        this._paddingLeft = value;
        return this;
    }

    //PaddingRight Getter Setter
    public getPaddingRight(): string{
        return this._paddingRight;
    }
    public setPaddingRight(value: string): TextBoxSettings{
        this._paddingRight = value;
        return this;
    }

    //PaddingTop Getter Setter
    public getPaddingTop(): string{
        return this._paddingTop;
    }
    public setPaddingTop(value: string): TextBoxSettings{
        this._paddingTop = value;
        return this;
    }

    //PaddingBottom Getter Setter
    public getPaddingBottom(): string{
        return this._paddingBottom;
    }
    public setPaddingBottom(value: string): TextBoxSettings{
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
    public setFontSize(value: string): TextBoxSettings{
        this._fontSize = value;
        return this;
    }

    //FontSize Getter Setter
    public getBackgroundColor(): string{
        return this._backgroundColor;
    }
    public setBackgroundColor(value: string): TextBoxSettings{
        this._backgroundColor = value;
        return this;
    }

    //FontSize Getter Setter
    public getTextAlign(): string{
        return this._textAlign;
    }
    public setTextAlign(value: string): TextBoxSettings{
        this._textAlign = value;
        return this;
    }

    //FontSize Getter Setter
    public getPlaceHolderText(): string{
        return this._placeHolderText;
    }
    public setPlaceHolderText(value: string): TextBoxSettings{
        this._placeHolderText = value;
        return this;
    }

}