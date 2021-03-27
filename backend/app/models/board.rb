class Board < ApplicationRecord
  validates :name, uniqueness: true
end
