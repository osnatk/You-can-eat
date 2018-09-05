"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Client = (function () {
    function Client(clientId, clientName, clientMail, clientNumCards) {
        if (clientId === void 0) { clientId = null; }
        if (clientName === void 0) { clientName = null; }
        if (clientMail === void 0) { clientMail = null; }
        if (clientNumCards === void 0) { clientNumCards = null; }
        this.clientId = clientId;
        this.clientName = clientName;
        this.clientMail = clientMail;
        this.clientNumCards = clientNumCards;
    }
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=Client.js.map