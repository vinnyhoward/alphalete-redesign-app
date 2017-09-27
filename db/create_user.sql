INSERT INTO customer (
username, user_email, user_password, auth_id
)
VALUES
($1, $2, $3, $4)
RETURNING *;