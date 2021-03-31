class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :text
  belongs_to :user, serializer: UserSerializer
end
