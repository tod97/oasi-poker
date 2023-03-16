import { Result } from './result.model';

const points = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

export class Player {
  firstName!: string;
  lastName!: string;
  instagram!: string;

  description?: string;
  img?: string;

  results: Result[] = [];
  points: number = 0;

  constructor(data: any = {}) {
    Object.assign(this, data);

    if (data.results) {
      this.results = data.results.map((result: any) => new Result(result));
      this.results.forEach((result: Result) => {
        if (result.rank <= 10 && result.rank > 0) {
          this.points += points[result.rank - 1];
        }
      });
      this.results.reverse();
    }
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
