---------------

# 自定义物料

[文档](https://appworks.site/materials/about.html)。

## 安装appworks CLI

```bash
$ npm i -g appworks
$ appworks --help
```

## 安装相关依赖

```bash
$ npm install
```

## 开发物料

```bash
# block
$ cd blocks/ExampleBlock
$ npm install
$ npm run start

# 组件
$ cd blocks/ExampleBlock
$ npm install
$ npm run start
```

## 添加新的物料

```bash
$ appworks add  # 选择 block|component|scaffold
```

## 生成物料数据

```bash
$ appworks generate
```

## 发布物料数据

```bash
# 同步到fusion物料中心
$ appworks sync
```

## 在AppWorks中使用物料

将物料数据url添加到 [AppWorks](https://appworks.site/pack/basic/materials.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%89%A9%E6%96%99%E6%BA%90)。
