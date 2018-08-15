class User
    
    if(ENV['DATABASE_URL'])
        uri = URI.parse(ENV['DATABASE_URL'])
        DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
    else
        DB = PG.connect(host: "localhost", port: 5432, dbname: 'books_api_development')
    end

    def self.all
        result = DB.exec("SELECT * FROM users;")
        return result.map do |result|
            {
                "id" => result["id"].to_i,
                "username" => result["username"], 
                "pass_word" => result["pass_word"]
            }
        end
    end

    def self.find(id)
        results = DB.exec("SELECT * FROM users WHERE id=#{id};")
        return {
            "id" => results.first["id"].to_i, 
            "username" => results.first["username"], 
            "pass_word" => results.first["pass_word"]
        }
    end

    def self.create(opts)
        results = DB.exec(
            <<-SQL
                INSERT INTO users (username, pass_word)
                VALUES ( '#{opts["username"]}', '#{opts["pass_word"]}')
                RETURNING id, username, pass_word;
            SQL
        )
        return {
            "id" => results.first["id"].to_i, 
            "username" => results.first["username"], 
            "pass_word" => results.first["pass_word"]
        }
    end

    def self.delete(id)
        results = DB.exec("DELETE FROM users WHERE id=#{id};")
        return { "deleted" => true }
    end

    def self.update(id, opts)
        results = DB.exec(
            <<-SQL
                UPDATE users
                SET username='#{opts["username"]}', pass_word='#{opts["pass_word"]}'
                WHERE id=#{id}
                RETURNING id, username, pass_word; 
            SQL
        )
        return {
            "id" => results.first["id"].to_i, 
            "username" => results.first["username"], 
            "pass_word" => results.first["pass_word"]
        }
    end
end 