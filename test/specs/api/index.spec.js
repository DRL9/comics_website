import api from '@/api/index.js'
import { expect } from 'chai'

describe('api/', () => {
    describe('index.js', () => {
        describe('default', () => {
            const rightComicId = 'c2',
                wrongComicId = 'wrongId',
                rightChaptor = 1,
                wrongChaptor = 1110,
                rightPage = 1,
                wrongPage = 111110;

            describe('.getComicsInfo(comicsId)', () => {
                it('expect be resolved with right param', (done) => {
                    api.getComicsInfo(rightComicId).then((v) => {
                        expect(v).have.all.keys('coverImg', 'name', 'intro', 'totalChaptor', 'author');
                        expect(v).have.property('totalChaptor').that.is.a('number')
                        done();
                    }).catch(done)
                });

                it('expect be rejected with wrong param', (done) => {
                    api.getComicsInfo(wrongComicId).then(() => {
                        done(new Error())
                    }, (err) => {
                        done();
                    })
                });
            });

            describe('.getComicsChaptorInfo(comicsID, chaptor)', () => {
                it('expect be resolved with right params', (done) => {
                    api.getComicsChaptorInfo(rightComicId, rightChaptor).then((v) => {
                        expect(v).have.all.keys('title', 'imgList');
                        expect(v).have.property('imgList').that.is.a('array');
                        done();
                    }).catch(done);
                });

                it('expect be rejected with wrong params', () => {
                    api.getComicsChaptorInfo(wrongComicId, wrongChaptor).then((v) => {
                        done(new Error());
                    }, () => {
                        done();
                    })
                });
            });

            describe('.getComicsUrl(comicsID, chaptor, page)', () => {
                it('expected to be resovled with right param', (done) => {
                    api.getComicsUrl(rightComicId, rightChaptor, rightPage).then((v) => {
                        expect(v).have.property('url')
                        done();
                    }).catch(done);
                });

                it('expected to be rejected with wrong param', (done) => {
                    api.getComicsUrl(wrongComicId, wrongChaptor, wrongPage).then(() => {
                        done(new Error())
                    }, () => {
                        done();
                    });
                });
            });

            describe('.searchComics(queryConditions)', () => {
                it('expect be resolved. and fulfilled with right object', (done) => {
                    api.searchComics({}).then((v) => {
                        expect(v).to.be.instanceof(Array);
                        expect(v[0]).to.be.an('object').has.all.keys('comicsId', 'comicsName', 'coverImg');
                        done();
                    }).catch(done);
                });
            });

        });
    });

});