export class User {
  constructor(
    public id: String,
    public email: String,
    private _token: String,
    private tokenExpirationDate: Date
  ) { }

  token() {
    if (!this.tokenExpirationDate || this.tokenExpirationDate <= new Date()) {
      return null;
    }
    else {
      return this._token;
    }
  }
}