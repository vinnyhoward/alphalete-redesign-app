DELETE FROM line_items
WHERE productid = $1
AND orderid =$2;