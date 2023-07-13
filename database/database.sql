CREATE TABLE person
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

CREATE TABLE post
(
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id SERIAL,
    FOREIGN KEY (user_id) REFERENCES person(id)
);