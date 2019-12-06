# treelab-backend-tutorial

使用GraphQl和NodeJS的简单后端测试

# 目标
在此后端入门教程中，您的任务是为表格设计一个给前段的GraphQL的数据架构。本文件里面已经有一个CSV文件拥有大约一万行的数据。你可以用这个CSV数据来显示，不需要创建任何数据库。你只需要用GraphQL来返回数据成一下定义的格式。

## 说明
您应该能够从列或行中获取单元格。 目标是设计架构，使其易于
重新排列列和行. 

## 模式定义
表具有三项必须考虑的事项，它们分别是表列，行和单元格。一个表有多个列和行，并且每个行和列有多个cell。

## 表属性 (Table)
1. Name
2. Columns
3. Rows

## 列属性 (Column) 
列具有以下属性
1.姓名
2.订购
3.单元格

## 行属性 (Row)
1.姓名
2.订购
3. 单元格

## 单元格属性 (Cells)
1. 价值

# 奖励功能/端点

## 分页
您应该设计架构，以便前端可以说出要从查询返回多少行。 例如，
前端应该能够说它只需要前10行。

