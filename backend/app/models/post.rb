class Post < ApplicationRecord
  belongs_to :user
  belongs_to :board
  has_many :comments

  validates_presence_of :title
  validates_presence_of :text
  # todo: comments relationship
end
