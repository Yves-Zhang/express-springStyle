import express from 'express';
import { yamlConfig } from './configManage';
import setStatic from './staticConfig';

const app = express();

setStatic(app, express); // 设置静态资源

export default app;
