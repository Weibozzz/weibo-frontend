## 前言
前端同学建议使用 `navicat` 可视化工具，建表和数据库，
我们简单了解一下数据库的
增删改查，足够我们前端用了，`术业有专攻`。

学到这些基本，我主要教大家如何遇到不会的如何去找资源，授之以渔。

## 查询

### 基本查询
不带条件查询
```
select `id`,`title` from article;
```
表示从 `article` 表中查询 `id和title` 的结果
### 1.带条件查询
带条件查询
```
select `id`,`title` from article where createTime<'"+t2+"' && createTime>='"+t1+"';
```
表示从 `article` 表中查询 `id和title`，并且 `createTime` 在 `t2` 和 `t1` 之间 的结果;
### 2.带条件查询
```
select `id`,`title` from article where createTime<'"+t2+"' && createTime>='"+t1+"' order by createTime desc;
```
表示从 `article` 表中查询 `id和title`，并且 `createTime` 在 `t2` 和 `t1` 之间 的结果， 并且按照 `createTime` 倒叙(`desc`)排列的结果;

### 3.带条件查询
```
select `id`,`title` from article where createTime<'"+t2+"' && createTime>='"+t1+"' order by createTime desc limit 10;
```
表示从 `article` 表中查询 `id和title`，并且 `createTime` 在 `t2` 和 `t1` 之间 的结果， 并且按照 `createTime` 倒叙(`desc`)排列的结果, 并且限制只取10条数据;

## 更新
```
update `article` set title='伟波前端',`user`='伟波' where `id`=10
```
表示从 `article` 表中，当 `id` 等于10的的那个， 更新 `title和user`字段为 伟波前端 和 伟波

## 增加
```
insert into article(title,`type`) values ('伟波前端', '前端');
```
表示从 `article` 表中，插入 `title和type`字段为 伟波前端 和 前端

## 删除
```
delete from comment where id= 10;
```
表示从 `comment` 表中，找到 `id` 等于 10，删除它
