import { Library } from './library';
import { BookCopy } from './book-copy';
import { Member } from './member';

describe('도서관', () => {

    let library: Library;

    beforeEach(() => {
        library = new Library();
    });

    describe('대여', () => {

        it('책을 대여 한다.', function () {
            const loan = library.loan(new BookCopy(), new Member());
            expect(loan).toBeDefined();
        });

        it('책 대여 실패 / 책 이용 불가 상태', function () {
            const loan = library.loan(new BookCopy(), new Member());
            expect(loan).toBeDefined();
        });

        it('책 대여 실패 / 대여 가능 권수 초과', function () {
            const loan = library.loan(new BookCopy(), new Member());
            expect(loan).toBeDefined();
        });

        it('책 대여 실패 / 연체중', function () {
            const loan = library.loan(new BookCopy(), new Member());
            expect(loan).toBeDefined();
        });

    });

});