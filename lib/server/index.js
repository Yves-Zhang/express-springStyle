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

const {RestMappings, RestControllers, MiddleWares} = store;

const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

MiddleWares.map(item => {
    app.use(item)
})

setStatic(app, express); // 设置静态资源
createRouters(app, express)(RestControllers, RestMappings);  // 创建路由

export default app;
