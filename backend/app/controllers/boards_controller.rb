class BoardsController < ApplicationController
  
  def index
    boards = Board.all
    serialized_boards = boards.map {|board| BoardSerializer.new(board)}
    render json: {boards: serialized_boards}, status: :accepted
  end
  
end
