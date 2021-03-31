class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text, :created_at
  belongs_to :user, serializer: UserSerializer
end
