
const HU = {
    locale: 'HU-hu',
    currencyLocale: 'HUF',
    date(date) {
        return new Intl.DateTimeFormat(this.locale).format(date)
    },
    curreny(price) {
        return new Intl.NumberFormat(this.locale, {
            style: 'currency', currency: this.currencyLocale
        }).format(price)
    },
    list(list) {
        return new Intl.ListFormat(this.locale, {
            style: 'long', type: 'conjunction'
        }).format(list)
    }
}

export default HU;
