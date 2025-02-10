import { Entity, EntityMetadata } from 'src/shared/core/entity';
import { BookStatusEnum } from '../enums/book-status.enum';
import { History } from 'src/modules/history/domain/history';

interface BookProps {
  status: BookStatusEnum;
  name: string;
  author: string;
  value: number;
  history?: History[];
}

export class Book extends Entity<BookProps> {
  private constructor(props: BookProps, metadata?: EntityMetadata) {
    super(props, metadata);
  }

  static create(props: BookProps, metadata?: EntityMetadata) {
    return new Book(props, metadata);
  }

  get name() {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get status() {
    return this.props.status;
  }

  set status(value: BookStatusEnum) {
    this.props.status = value;
  }

  get author() {
    return this.props.author;
  }

  set author(value: string) {
    this.props.author = value;
  }

  get value() {
    return this.props.value;
  }

  set value(value: number) {
    this.props.value = value;
  }

  get history() {
    return this.props.history;
  }

  set history(history: History[]) {
    this.props.history.push(history[0]);
  }
}
