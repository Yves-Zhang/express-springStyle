import express from 'express';
import { yamlConfig } from './configManage';
import setStatic from './staticConfig';
import store from '../core/store';
import { prasePath } from '../tools';
import createRouters from './createRouters'

// 类加载器 把所有的class 加载进来
const appFileName = yamlConfig?.application?.fileName || 'src';
const mainJs = yamlConfig?.application?.mainJs || 'applicationContext';
const applicationPath = prasePath.cwdPath + `/${appFileName}/${mainJs}.js`;
require(applicationPath).default;

const app = express();
const {RestMappings, RestControllers} = store;

setStatic(app, express); // 设置静态资源
createRouters(app, express)(RestControllers, RestMappings);  // 创建路由

export default app;
