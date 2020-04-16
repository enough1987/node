import '@babel/polyfill';
import AuthController from './auth';
import AuthService from '../services/auth';
import logger from '../../config/winston';
import { mockResponseJson } from '../../utils/testUtils';


describe('AuthController', () => {
  const testToken = 'test token';
  const testError = 'test error';
  let reqMock;
  let resMock;

  beforeEach(() => {
    logger.debug = jest.fn();
    reqMock = jest.fn();
    resMock = mockResponseJson();
  });

  describe('login', () => {
    it('should return token on success', async () => {
      AuthService.login = jest.fn()
        .mockReturnValue(testToken);

      await AuthController.login(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        accessToken: testToken
      });
    });
    it('should return error on failure', async () => {
      AuthService.login = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await AuthController.login(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('register', () => {
    it('should return token on success', async () => {
      AuthService.register = jest.fn()
        .mockReturnValue(testToken);

      await AuthController.register(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        accessToken: testToken
      });
    });
    it('should return error on failure', async () => {
      AuthService.register = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await AuthController.register(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
});

