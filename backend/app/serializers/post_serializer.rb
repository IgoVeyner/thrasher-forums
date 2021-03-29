class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at, :text, :user_id
  belongs_to :user, serializer: UserSerializer
end
