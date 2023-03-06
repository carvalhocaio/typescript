abstract class UserAccount {
  public name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`)
  }
}

class CharAccount extends UserAccount {
  private nickname: string
  readonly nationality: string
  level: number

  constructor(name: string, age: number, nickname: string, nationality: string, level: number) {
    super(name, age)

    this.nickname = nickname
    this.nationality = nationality
    this.level = level
  }

  get getLevel() {
    console.log("------GET------");
    return this.level
  }

  set setLevel(level: number) {
    this.level = level
  }

  logCharDetails(): void {
    console.log(`The player ${this.name} has the char ${this.nickname} at level ${this.level}`)
  }
}

const martin = new CharAccount("Martin", 29, "garrix", "ndl", 80)
console.log(martin)
martin.logDetails()
martin.logCharDetails()

martin.setLevel = 499

console.log(martin.getLevel)