import { Member } from './member';
import { LoanManager } from './loan-manager';
import { BookCopy } from './book-copy';
import { Loan } from './loan';
import { ReturnManager } from './return-manager';
import { Returning } from './returning';

export class Library {

    loanManager: LoanManager;
    returnManager: ReturnManager;

    // [MESSAGE] 대여하라
    public loan(bookCopy: BookCopy, member: Member): Loan {

        if (!this.loanManager.isAbleToLoan(member)) {
            throw new Error();
        }

        if (this.returnManager.hasOverdue(member)) {
            throw new Error();
        }

        // bookCopy.checkAvailable();
        if (!bookCopy.isAvailable()) {
            throw new Error();
        }

        return new Loan(bookCopy, member);
    }

    public returning(loan: Loan): Returning {
        return this.returnManager.returning(loan);
    }

}