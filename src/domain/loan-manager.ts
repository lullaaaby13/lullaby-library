import { Member } from './member';
import { Loan } from './loan';

export class LoanManager {

    loans: Loan[] = [];

    // [MESSAGE] 대여가 가능한지 확인하라.
    public isAbleToLoan(member: Member): boolean {
        // [MESSAGE] 대여 가능한 권수를 확인하라.
        this.getAvailableCount(member);
        // [MESSAGE] 연체 여부를 확인하라.
        return true;
    }

    // [MESSAGE] 대여 가능한 권수를 확인하라.
    // 현재 대여 중인 권수 확인 필요.
    private getAvailableCount(member: Member) {
        const loanCount = this.loans.filter(loan => loan.member === member).length;
        return loanCount < member.grade.availableCount;
    }

}