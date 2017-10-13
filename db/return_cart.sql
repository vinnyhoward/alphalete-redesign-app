SELECT *
FROM line_items
JOIN products on line_items.productid = products.productid
WHERE orderid = $1;


-- SELECT *
-- FROM line_items
-- JOIN products on line_items.product_id = products=id
-- WHERE order_id = $1;
