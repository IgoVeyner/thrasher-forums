class PostSerializer < ActiveModel::Serializer
  attributes :id, :title

  # todo: add comments relationship
end
