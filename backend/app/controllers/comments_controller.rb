class CommentsController < ApplicationController
  
  def create 
    user = User.find_by(username: comment_params[:username])
    comment = Comment.create(
      text: comment_params[:text],
      user_id: user.id,
      post_id: comment_params[:post_id]
    )
    
    if comment.valid?
      render json: { comment: CommentSerializer.new(comment) }, status: :created 
    else
      render json: { error: 'failed to create comment', messages: comment.errors.full_messages }, status: :not_acceptable
    end
  end

  def destroy
    comment = Comment.find_by_id(params[:id])

    if comment
      comment.destroy
      render json: { message: 'Comment deleted'}, status: :accepted
    else
      render json: { error: 'Comment not found' }, status: :not_acceptable
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :username, :post_id)
  end

end