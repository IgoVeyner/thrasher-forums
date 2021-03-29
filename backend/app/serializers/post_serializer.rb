class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at, :text
  belongs_to :user
  # todo: add comments relationship
end
