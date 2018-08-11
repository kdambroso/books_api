class BooksController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index 
        render json: Book.all 
    end 

    def show 
        render json: Book.find(params["id"])
    end 

    def create 
        render json: Book.create(params["book"])
    end 

    def delete 
        render json: Book.delete(params["id"])
    end 

    def update
        render json: Book.update(params["id"], params["book"])
    end 
end 
