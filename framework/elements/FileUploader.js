import BaseElement from './BaseElement.js';
import ElementType from '../constants/ElementType.js';
import Logger from '../utils/Logger.js';


export class FileUploader extends BaseElement {
    constructor(locator, name) {
        super(locator, name);
        this.type = ElementType.FILE_UPLOADER;
    }

    async uploadFile(path) {
        await this.state().waitForExist();
        await this.state().waitForEnabled();

        Logger.info(`${this.log()}Upload file with path "${path}"`);

        const element = await this._get$();
        return element.setValue(path);
    }
}
