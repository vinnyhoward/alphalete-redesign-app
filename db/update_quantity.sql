UPDATE line_items
SET qty = $1
WHERE productid = $2;