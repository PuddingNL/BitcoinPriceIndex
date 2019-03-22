import axios from 'axios';

export default class Scraper {
    constructor(url, val) {
        this.url = url;
        this.val = val;
    }
}

export async function getHTML(url) {
    const data = await axios.get(url.url)
        .then(function (resp) {
            const value = url.val;
            switch(value) {
                case 'USD':
                    return resp.data.bpi.USD;
                break;
                case 'GBP':
                    return resp.data.bpi.GBP;
                break;
                case 'EUR':
                    return resp.data.bpi.EUR;
                break;
            }
        });
    let output = `1 Bitcoin is worth ${data.rate_float.toFixed(2)} ${url.val}`;
    console.log(output);
}