INSERT INTO customer (
username, user_email, auth_id
)
VALUES
($1, $2, $3)
RETURNING *;