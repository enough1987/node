import '@babel/polyfill';
import UsersController from './users';
import usersService from '../services/users';
import logger from '../../config/winston';
import { mockResponseJson } from '../../utils/testUtils';


describe('UsersController', () => {
  const testResult = 'test result';
  const testError = 'test error';
  let reqMock;
  let resMock;

  beforeEach(() => {
    logger.debug = jest.fn();
    reqMock = {
      query: '?loginSubstring=test&limit=10',
      params: {
        id: 1
      },
      body: {
        userId: 1
      }
    };
    resMock = mockResponseJson();
  });

  describe('getAutoSuggested', () => {
    it('should return token on success', async () => {
      usersService.getAutoSuggested = jest.fn()
        .mockReturnValue(testResult);

      await UsersController.getAutoSuggested(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      usersService.getAutoSuggested = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await UsersController.getAutoSuggested(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('getAll', () => {
    it('should return token on success', async () => {
      usersService.getAll = jest.fn()
        .mockReturnValue(testResult);

      await UsersController.getAll(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      usersService.getAll = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await UsersController.getAll(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('getById', () => {
    it('should return token on success', async () => {
      usersService.getById = jest.fn()
        .mockReturnValue(testResult);

      await UsersController.getById(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      usersService.getById = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await UsersController.getById(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('create', () => {
    it('should return token on success', async () => {
      usersService.create = jest.fn()
        .mockReturnValue(testResult);

      await UsersController.create(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      usersService.create = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await UsersController.create(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('update', () => {
    it('should return token on success', async () => {
      usersService.update = jest.fn()
        .mockReturnValue(testResult);

      await UsersController.update(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      usersService.update = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await UsersController.update(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('delete', () => {
    it('should return token on success', async () => {
      usersService.delete = jest.fn()
        .mockReturnValue(testResult);

      await UsersController.delete(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      usersService.delete = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await UsersController.delete(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
});

