class OrderBook {
    constructor(symbol = "BTCUSD") {
        this.symbol = symbol;
        this.bids = [];
        this.ask = [];
        this._nextId = 1;
        this.lastTradePrice = null;
    }

    _genOrderId() {
        return this._nextId++;
    }

    _sort(side) {
        if (side === "BUY") {
            this.bids.sort((a, b) => b.price - a.price || a.timestamp - b.timestamp);
        } else {
            this.ask.sort((a, b) => a.price - b.price || a.timestamp - b.timestamp);
        }
    }

    placeOrder(side, type, price = null, quantity, user) {
        const order = {
            orderId: this._genOrderId(),
            symbol: this.symbol,
            side,
            type,
            price,
            orignQty: quantity,
            remainQty: quantity,
            exectQty: 0,
            timestamp: Date.now(),
            user
        };

        if (type === "MARKET") {
            let result = this._marketMatch(order);
            return result;
        } else {
            let result = this._limitMatch(order);
            return result;
        }
    }

    _marketMatch(order) {
        if (order.side === "BUY") {
            let askArr = this.ask;
            while (order.remainQty > 0 && askArr.length > 0) {
                let top = askArr[0];
                let fill = Math.min(order.remainQty, top.remainQty);
                order.remainQty -= fill;
                order.exectQty += fill;
                top.remainQty -= fill;
                top.exectQty += fill;

                if (top.remainQty <= 0) askArr.shift();
            }
        }
        return order;
    }

    _limitMatch(order) {
        if (order.side === "BUY") {
            let opposite = this.ask;
            while (order.remainQty > 0 && opposite.length > 0) {
                let top = opposite[0];
                if (order.price >= top.price) {
                    let fill = Math.min(order.remainQty, top.remainQty);
                    order.remainQty -= fill;
                    order.exectQty += fill;
                    top.remainQty -= fill;
                    top.exectQty += fill;

                    if (top.remainQty <= 0) opposite.shift();
                } else break;
            }

            if (order.remainQty > 0) {
                this.bids.push(order);
                this._sort("BUY");
            }
        } else {
            let opposite = this.bids;
            while (order.remainQty > 0 && opposite.length > 0) {
                let top = opposite[0];
                if (order.price <= top.price) {
                    let fill = Math.min(order.remainQty, top.remainQty);
                    order.remainQty -= fill;
                    order.exectQty += fill;
                    top.remainQty -= fill;
                    top.exectQty += fill;

                    if (top.remainQty <= 0) opposite.shift();
                } else break;
            }

            if (order.remainQty > 0) {
                this.ask.push(order);
                this._sort("SELL");
            }
        }

        return order;
    }

    getBookSnapShot() {
        return {
            lastUpdate: Date.now(),
            bids: this.bids.map(o => [o.price, o.remainQty]),
            ask: this.ask.map(o => [o.price, o.remainQty])
        };
    }
}

module.exports = OrderBook;
