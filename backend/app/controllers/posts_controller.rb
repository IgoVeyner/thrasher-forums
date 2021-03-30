class PostsController < ApplicationController
  
  def create
    user = User.find_by(username: post_params[:username])
    board = Board.find_by(name: post_params[:board_name])
    post = Post.create(
      title: post_params[:title], 
      text: post_params[:text],
      user_id: user.id,
      board_id: board.id
    )

    if post 
      render json: { post: PostSerializer.new(post) }, status: :created
    else
      render json: { error: 'failed to create post', messages: post.errors.full_messages }, status: :not_acceptable
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :text, :board_name, :username)
  end
end
