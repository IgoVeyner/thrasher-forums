class BoardSerializer < ActiveModel::Serializer
  attributes :name, :description, :id
  has_many :posts, serializer: PostSerializer
end
