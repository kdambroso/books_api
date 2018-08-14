class Book 

    attr_reader :id, :title, :author, :publisher, :genre, :image, :summary

    # DB = PG.connect(host: "localhost", port: 5432, dbname: 'books_api_development')

    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'books_api_development')
    end

def self.all 
    result = DB.exec("SELECT * FROM books;")
        return result.map do |result|
            {
                "id" => result["id"].to_i,
                "title" => result["title"],
                "author" => result["author"],
                "publisher" => result["publisher"],
                "genre" => result["genre"], 
                "image" => result["image"], 
                "summary" => result["summary"]
            }
        end 
    end 

    def self.find(id)
        results = DB.exec("SELECT * FROM books WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i,
            "title" => results.first["title"],
            "author" => results.first["author"],
            "publisher" => results.first["publisher"],
            "genre" => results.first["genre"], 
            "image" => results.first["image"], 
            "summary" => results.first["summary"]
        }
    end 

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO books (title, author, publisher, genre, image, summary)
                VALUES ( '#{opts["title"]}', '#{opts["author"]}', '#{opts["publisher"]}', '#{opts["genre"]}', '#{opts["image"]}', '#{opts["summary"]}' )
                RETURNING id, title, author, publisher, genre, image, summary;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "title" => results.first["title"],
            "author" => results.first["author"],
            "publisher" => results.first["publisher"],
            "genre" => results.first["genre"], 
            "image" => results.first["image"], 
            "summary" => results.first["summary"]

        }
    end

    def self.delete(id)
        results = DB.exec("DELETE FROM books WHERE id=#{id};")
        return { "deleted" => true }
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE books
                SET title='#{opts["title"]}', author='#{opts["author"]}', publisher='#{opts["publisher"]}', genre='#{opts["genre"]}', image='#{opts["image"]}', summary='#{opts["summary"]}'
                WHERE id=#{id}
                RETURNING id, title, author, publisher, genre, image, summary;
            SQL
        )
        return {
            "id" => results.first["id"].to_i,
            "title" => results.first["title"],
            "author" => results.first["author"],
            "publisher" => results.first["publisher"],
            "genre" => results.first["genre"], 
            "image" => results.first["image"], 
            "summary" => results.first["summary"]
        }
    end

end 



