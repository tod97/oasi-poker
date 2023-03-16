export class Result {
  date!: Date;
  rank!: number;

  constructor(data: any = {}) {
    Object.assign(this, data);
  }
}
