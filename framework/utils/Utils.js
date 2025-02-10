import path from 'path';
import { File } from '../../framework/browser/entities/File.js';
import { downloadDir } from '../../framework/configs/main.wdio.conf.js';
import { Label } from '../../framework/elements/index.js';
import Logger from '../../framework/utils/Logger.js';

export default class Utils {

  /**
   * Generate the file path for the downloaded file
   * @param {string} filename - The name of the file to check for download
   * @returns {string} - The full file path
   */
  static getFilePath(filename) {
    return path.join(downloadDir, filename);
  }

  /**
   * Wait for the file to be downloaded
   * @param {string} filename - The name of the file to check for download
   * @param {number} timeout - The timeout to wait for the file to be downloaded
   * @returns {Promise<boolean>} - Resolves true if the file exists, false otherwise
   */
  static async waitForFileToDownload(filename, timeout = 35000) {
    const filePath = Utils.getFilePath(filename);
    const file = new File(); 
    Logger.info(`Waiting for the file to download at path: ${filePath}`);
    return file.isFileExist(filePath, timeout);
  }

  static createLabelWithText(text) {
    return new Label(`//li[contains(text(),"${text}")]`, 'Dynamic Label');
}
}