class BoardsController < ApplicationController
  def index
    boards = Board.all
    seralized_boards = boards.map {|board| BoardSerializer.new(board)}
    render json: {boards: seralized_boards}, status: :accepted
  end

  def show 
    board = Board.find_by_slug(params[:id])
    if board 
      render json: {board: BoardSerializer.new(baord)}, status: :accepted
    else 
      render json: {error: "No board found"}, status: :not_acceptable
    end
  end
  
end
