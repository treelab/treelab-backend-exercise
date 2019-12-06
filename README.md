＃treelab-backend-tutorial
使用GraphQl和NodeJS的简单后端测试

＃目标
在此后端入门教程中，您的任务是为表设计数据模式。

##说明
您应该能够从列或行中获取单元格。 目标是设计架构，使其易于
重新排列列和行，而不必重新排列所有单元格，还为前端进行渲染

##模式定义
表具有三项必须考虑的事项，它们分别是列，行和单元格。

##表属性
1.姓名
2.栏
3.行

##列属性
列具有以下属性
1.姓名
2.订购
3.细胞

##行属性
1.姓名
2.订购
3.细胞

##单元格属性
1.价值

＃奖励功能/端点

##分页
您应该设计架构，以便前端可以说出要从查询返回多少行。 例如，
前端应该能够说它只需要前10行。
