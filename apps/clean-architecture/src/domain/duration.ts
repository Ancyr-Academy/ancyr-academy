export class Duration {
  public readonly days: number = 0;
  public readonly hours: number = 0;
  public readonly minutes: number = 0;
  public readonly seconds: number = 0;

  constructor(private total: number) {
    this.seconds = this.total;

    if (this.seconds > 86400) {
      this.days = Math.floor(this.seconds / 86400);
      this.seconds = this.seconds - this.days * 86400;
    }

    if (this.seconds >= 3600) {
      this.hours = Math.floor(this.seconds / 3600);
      this.seconds = this.seconds - this.hours * 3600;
    }

    if (this.seconds >= 60) {
      this.minutes = Math.floor(this.seconds / 60);
      this.seconds = this.seconds - this.minutes * 60;
    }
  }

  toString(): string {
    if (this.days > 0) {
      return `${this.days} jours`;
    }

    return `${this.days}j ${this.pad(this.hours)}h ${this.pad(
      this.minutes
    )}m ${this.pad(this.seconds)}s`;
  }

  pad(number: number): string {
    return number.toString().padStart(2, "0");
  }
}
