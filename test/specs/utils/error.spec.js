import { NotFoundError } from '@/utils/error.js'
import { expect } from 'chai'

describe('utils/', () => {
    describe('error.js', () => {
        describe('NotFoundError', () => {
            it('.getInstance should get error instance', () => {
                expect(NotFoundError.getInstance()).to.instanceof(Error)
                    .has.property('code', 404);
            });
        });
    });
});