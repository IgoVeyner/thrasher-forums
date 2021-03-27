class BoardsController < ApplicationController
  def index
    boards = Board.all
    seralized_boards = boards.map {|board| BoardSerializer.new(board)}
    render json: {boards: seralized_boards}, status: :accepted
  end
end
