export default class Category {
  id: string | number;
  title: string;
  color: string;
  constructor(id: string | number, title: string, color: string) {
    this.id = id;
    this.title = title;
    this.color = color;
  }
}