# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CREATE TABLE books (id SERIAL, title TEXT, author TEXT, publisher TEXT, genre TEXT, image TEXT, summary TEXT); 

INSERT INTO books (title, author, publisher, genre, image) VALUES ('Lord of The Rings', 'J.R.R. Tolkien', 'Allen & Unwin', 'Ficton', 'null'); 

INSERT INTO books (title, author, publisher, genre, image) VALUES ('The Hobbit', 'J.R.R. Tolkien', 'Allen & Unwin', 'Ficton', ''); 

INSERT INTO books (title, author, publisher, genre, image) VALUES ('The Silmarillion', 'J.R.R. Tolkien', 'Allen & Unwin', 'Ficton'); 

CREATE TABLE users (id SERIAL, username VARCHAR(32), pass_word VARCHAR(32)); 

INSERT INTO users (username, pass_word) VALUES ('PANDAboy21', 'EatChessE'); 
INSERT INTO users (username, pass_word) VALUES ('PiZzAkIng', 'EatZZzzA'); 

CREATE TABLE reviews (id SERIAL, book_id INT, user_id INT, review_content TEXT); 

INSERT INTO reviews (book_id, user_id, review_content) VALUES ('1', '1', 'This book is so good');






5.times do
    Book.create({
        'title' => "#{Faker::Book.title}",
        'author' => "#{Faker::Book.author}",
        'publisher' => "#{Faker::Book.publisher}"
        'genre' => "#{Faker::Book.genre}"
    })
end

