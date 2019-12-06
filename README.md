# treelab-backend-tutorial
A simple backend test using GraphQl and NodeJS

# Goal
Your task in this backend onboarding tutorial is to design a data schema for a table.

## Explanation
You should be able to get cells from either columns or rows. The goal is to design the schema so that it is easy
to reorder the columns and rows without having to reorder all the cells and also to make rendering for the frontend

## Schema Definition
A table has three things that you must consider and they are columns, rows, and cells.

## Table Properties
1. Name
2. Columns
3. Rows

## Column Properties
A column has the following properties 
1. Name
2. Order
3. Cells

## Row Properties
1. Name 
2. Order
3. Cells

## Cell Properties
1. Value

# Bonus Features/Endpoints

## Pagination
You should design the schema so that the frontend can say how many rows to return from the query. For example,
the frontend should be able to say it wants only the first 10 rows. 

