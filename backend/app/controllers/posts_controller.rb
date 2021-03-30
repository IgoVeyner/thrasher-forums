class PostsController < ApplicationController
  
  def create
    # create a post and return it or return an error
  end

  private

  def post_params
    params.require(:post).permit(:title, :text, :board_id, :user_id)
  end
end
