import BasePage from '../../framework/page/BasePage.js'
import { Label} from '../../framework/elements/index.js'

class ValvePage extends BasePage {
    constructor() {
        super(new Label('//*[@class="logo"]', 'Valve Page'), 'Valve Page')
    }
}

export default new ValvePage();