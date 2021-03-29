class PostSerializer < ActiveModel::Serializer
  attributes :id, :title
  belongs_to :user
  # todo: add comments relationship
end
