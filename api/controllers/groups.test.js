import '@babel/polyfill';
import GroupsController from './groups';
import groupsService from '../services/groups';
import logger from '../../config/winston';
import { mockResponseJson } from '../../utils/testUtils';


describe('GroupsController', () => {
  const testResult = 'test result';
  const testError = 'test error';
  let reqMock;
  let resMock;

  beforeEach(() => {
    logger.debug = jest.fn();
    reqMock = {
      params: {
        id: 'test'
      },
      body: {
        id: 'test'
      }
    };
    resMock = mockResponseJson();
  });

  describe('getById', () => {
    it('should return token on success', async () => {
      groupsService.getById = jest.fn()
        .mockReturnValue(testResult);

      await GroupsController.getById(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      groupsService.getById = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await GroupsController.getById(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('create', () => {
    it('should return token on success', async () => {
      groupsService.create = jest.fn()
        .mockReturnValue(testResult);

      await GroupsController.create(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      groupsService.create = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await GroupsController.create(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('update', () => {
    it('should return token on success', async () => {
      groupsService.update = jest.fn()
        .mockReturnValue(testResult);

      await GroupsController.update(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      groupsService.update = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await GroupsController.update(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
  describe('delete', () => {
    it('should return token on success', async () => {
      groupsService.delete = jest.fn()
        .mockReturnValue(testResult);

      await GroupsController.delete(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: false,
        data: testResult
      });
    });
    it('should return error on failure', async () => {
      groupsService.delete = jest.fn().mockImplementation(() => {
        throw new Error(testError);
      });

      await GroupsController.delete(reqMock, resMock);

      expect(resMock.json).toBeCalledWith({
        error: testError
      });
    });
  });
});
