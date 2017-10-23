import TextureResource from './TextureResource';

export default class CanvasResource extends TextureResource
{
    constructor(source)
    {
        super(source);

        this._oldWidth = source.width;
        this._oldHeight = source.height;
    }

    update()
    {
        const baseTexture = this.baseTexture;
        const source = this.source;

        if (!baseTexture) return;

        if (this._oldWidth !== source.width || this._oldHeight !== source.height)
        {
            this._oldWidth = source.width;
            this._oldHeight = source.height;
            baseTexture.setRealSize(source.width, source.height);
        }
        else
        {
            baseTexture.update();
        }
    }

    static from(canvas)
    {
        return new CanvasResource(canvas);
    }
}
