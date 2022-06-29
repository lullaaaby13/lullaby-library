import { Loan } from './loan';
import { LocalDateTime } from '@js-joda/core';

export class Returning {
    loan: Loan;
    returnedAt: LocalDateTime;

    constructor(loan: Loan) {
        this.loan = loan;
        this.returnedAt = LocalDateTime.now();
    }
}