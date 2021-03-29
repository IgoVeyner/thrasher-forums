class BoardSerializer < ActiveModel::Serializer
  attributes :name, :description
  has_many :posts
end
