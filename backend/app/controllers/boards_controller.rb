class BoardsController < ApplicationController
  def index
    boards = Board.all
    serialized_boards = boards.map {|board| BoardSerializer.new(board)}
    render json: {boards: serialized_boards}, status: :accepted
  end

  def show 
    board = Board.find_by_slug(params[:id])
    if board 
      render json: {board: BoardSerializer.new(board)}, status: :accepted
    else 
      render json: {error: "No board found"}, status: :not_acceptable
    end
  end
  
end
