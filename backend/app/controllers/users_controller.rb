class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.create(user_params)

    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
    else 
      render json: { error: 'failed to create user', messages: @user.errors.full_messages }, status: :not_acceptable
    end
  end

  def show 
    user = User.find_by_id(params[:id])

    if user 
      render json: { user: UserSerializer.new(user) }, status: :accepted
    else
      render json: {error: 'cannot find that user'}, status: :not_acceptable
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
