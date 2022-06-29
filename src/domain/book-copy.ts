// 책 재고

export class BookCopy {

    status: BookCopyStatus;

    constructor() {
        this.status = BookCopyStatus.AVAILABLE;
    }

    public checkAvailable() {
        return this.status === BookCopyStatus.AVAILABLE;
    }

    public isAvailable() {
        return this.status === BookCopyStatus.AVAILABLE;
    }

}

export enum BookCopyStatus {
    'AVAILABLE' = 'AVAILABLE',
    'BORROWED' = 'BORROWED',
    'RESERVED' = 'RESERVED',
    'DAMAGED' = 'DAMAGED'
}