import { NotFoundError } from '@/utils/error.js'
import { expect } from 'chai'

describe('utils.error', () => {
    it('NotFoundError.getInstance should get error instance', () => {
        expect(NotFoundError.getInstance()).to.instanceof(Error);
    });
});