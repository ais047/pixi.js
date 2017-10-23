import Runner from 'mini-runner';

/**
 * The controller for BaseTexture, manages validation and upload depends on its type.
 * onTextureUpload is required.
 * Can also contain onTextureStyle, onTextureNew, onTextureTag, onTextureDestroy.
 *
 */
export default class TextureResource
{
    /**
     * uploads the texture or returns false if it cant for some reason
     *
     * @param renderer {PIXI.WebGLRenderer} yeah, renderer!
     * @param baseTexture {PIXI.BaseTexture} the texture
     * @param glTexture {PIXI.glCore.GLTexture} texture instance for this webgl context
     * @returns {boolean} true is success
     */
    onTextureUpload(renderer, baseTexture, glTexture)
    {
        return false;
    }
}
