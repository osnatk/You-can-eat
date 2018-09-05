export class Client {

    public clientId: number;
    public clientName: string;
    public clientMail: string;
    public clientNumCards: string;

    constructor(clientId = null, clientName = null, clientMail = null, clientNumCards = null) {
        this.clientId = clientId;
        this.clientName = clientName;
        this.clientMail = clientMail;
        this.clientNumCards = clientNumCards;

    }
}
