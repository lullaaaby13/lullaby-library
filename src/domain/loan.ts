import { BookCopy } from './book-copy';
import { Member } from './member';
import { LocalDateTime } from '@js-joda/core';

export class Loan {
    bookCopy: BookCopy;
    member: Member;
    loanStartedAt: LocalDateTime;
    loanFinishedAt: LocalDateTime;

    constructor(bookCopy: BookCopy, member: Member) {
        this.bookCopy = bookCopy;
        this.member = member;
        this.loanStartedAt = LocalDateTime.now();
        this.loanFinishedAt = this.loanStartedAt.plusDays(member.grade.durationOfDays);
    }

    public isOverdue() {
        return this.loanFinishedAt.isBefore(LocalDateTime.now());
    }
}