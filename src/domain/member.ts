export class Member {
    grade: MemberGrade;

    constructor() {
        this.grade = MemberGrade.BRONZE;
    }
}

export const MemberGrade = {
    'BRONZE': {
        name: 'BRONZE',
        availableCount: 3,
        durationOfDays: 7,
    },
    'SILVER': {
        name: 'SILVER',
        availableCount: 5,
        durationOfDays: 7,
    },
    'GOLD': {
        name: 'GOLD',
        availableCount: 7,
        durationOfDays: 7,
    },
    'PLATINUM': {
        name: 'PLATINUM',
        availableCount: 10,
        durationOfDays: 14,
    },
    'DIAMOND': {
        name: 'DIAMOND',
        availableCount: 15,
        durationOfDays: 14,
    },
};

export type MemberGrade = typeof MemberGrade[keyof typeof MemberGrade];