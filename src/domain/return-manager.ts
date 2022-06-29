import { Loan } from './loan';
import { Member } from './member';
import { Overdue } from './overdue';
import { Returning } from './returning';

export class ReturnManager {

    overdues: Overdue[] = [];

    public returning(loan: Loan): Returning{

        if (loan.isOverdue()) {
            // TODO 연체
        }

        return new Returning(loan);
    }

    public hasOverdue(member: Member): boolean {
        return !!this.overdues.find(overdue => overdue.member === member);
    }

}