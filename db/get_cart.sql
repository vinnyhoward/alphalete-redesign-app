SELECT *
FROM orders
WHERE userid = $1 and status = 'false';