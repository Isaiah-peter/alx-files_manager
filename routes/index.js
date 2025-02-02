import express from 'express';
import appController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = express.Router();
router.get('/status', (req, res) => {
  appController.getStatus(req, res);
});
router.get('/stats', (req, res) => {
  appController.getStats(req, res);
});
router.post('/users', (req, res) => {
  UsersController.postNew(req, res);
});
router.get('/users/me', (req, res) => {6
  UsersController.getMe(req, res);
});
router.get('/connect', (req, res) => {
  AuthController.getConnect(req, res);
});
router.get('/disconnect', (req, res) => {
  AuthController.getDisconnect(req, res);
});
router.post('/files', (req, res) => {
  FilesController.postUpload(req, res);
});

module.exports = router;
