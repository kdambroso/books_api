# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CREATE TABLE books (id SERIAL, title TEXT, author TEXT, publisher TEXT, genre TEXT); 

INSERT INTO books (title, author, publisher, genre) VALUES ('Lord of The Rings', 'J.R.R. Tolkien', 'Allen & Unwin', 'Ficton'); 

INSERT INTO books (title, author, publisher, genre) VALUES ('The Hobbit', 'J.R.R. Tolkien', 'Allen & Unwin', 'Ficton'); 

INSERT INTO books (title, author, publisher, genre) VALUES ('The Silmarillion', 'J.R.R. Tolkien', 'Allen & Unwin', 'Ficton'); 




5.times do 
    Book.create({
        'title' => "#{Faker::Book.title}", 
        'author' => "#{Faker::Book.author}", 
        'publisher' => "#{Faker::Book.publisher}"
        'genre' => "#{Faker::Book.genre}"
    })
end 

 