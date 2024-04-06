import ErrorRepository from '../js/map';

test('Method Error 404', () => {
  const err = new ErrorRepository();
  expect(() => err.translate(404)).toThrowError();
});

test('Error 407', () => {
  const err = new ErrorRepository();
  expect(() => err.translate(407)).toThrowError();
});

test('Unknown error', () => {
  const err = new ErrorRepository();
  expect(() => err.translate(2000)).toThrowError();
});
