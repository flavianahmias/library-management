import { Entity, EntityMetadata } from 'src/shared/core/entity';
import { HistoryTypeEnum } from '../enums/history-type.enum';
import { User } from 'src/modules/user/domain/user';
import { Book } from 'src/modules/book/domain/book';

interface HistoryProps {
  type: HistoryTypeEnum;
  user: User;
  book: Book;
}

export class History extends Entity<HistoryProps> {
  private constructor(props: HistoryProps, metadata?: EntityMetadata) {
    super(props, metadata);
  }

  static create(props: HistoryProps, metadata?: EntityMetadata) {
    return new History(props, metadata);
  }

  get type() {
    return this.props.type;
  }

  set type(value: HistoryTypeEnum) {
    this.props.type = value;
  }

  get user() {
    return this.props.user;
  }

  set user(value: User) {
    this.props.user = value;
  }

  get book() {
    return this.props.book;
  }

  set book(book: Book) {
    this.props.book = book;
  }
}
