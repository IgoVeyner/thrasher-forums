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

    if post.valid?
      render json: { post: PostSerializer.new(post) }, status: :created
    else
      render json: { error: 'failed to create post', messages: post.errors.full_messages }, status: :not_acceptable
    end
  end

  def show 
    post = Post.find_by_id(params[:id])

    if post
      if post.comments.length > 0
        comments = post.comments
        serialized_comments = comments.map{|comment| CommentSerializer.new(comment)}

        render json: { post: PostSerializer.new(post), comments: serialized_comments }, status: :created
      else 
        render json: { post: PostSerializer.new(post) }, status: :created
      end 
    else
      render json: { error: 'Post not found' }, status: :not_acceptable
    end
  end

  def destroy
    post = Post.find_by_id(params[:id])

    if post
      post.destroy
      render json: { message: 'Post deleted'}, status: :accepted
    else
      render json: { error: 'Post not found' }, status: :not_acceptable
    end
  end

  def videos
    render json: {posts: serialize_mapper("videos")}, status: :accepted
  end
  
  def photos
    render json: {posts: serialize_mapper("photos")}, status: :accepted
  end
  
  def events
    render json: {posts: serialize_mapper("events")}, status: :accepted
  end

  private

  def post_params
    params.require(:post).permit(:title, :text, :board_name, :username)
  end

  def serialize_mapper(name)
    board = Board.find_by(name: name)
    posts = Post.where(board_id: board.id)
    posts.map {|post| PostSerializer.new(post)}
  end

end
