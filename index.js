import Scraper, {getHTML} from './lib/scraper';

const _btCoin = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// To choose: USD, GBP, EUR
const _rate = 'EUR';

async function getCoinUpdate(url, val) {
    const btCoin = new Scraper(url, val);
    const TheData = await getHTML(btCoin);
    return TheData;
}

// setInterval(function() {
    getCoinUpdate(_btCoin, _rate);
// }, 5000);