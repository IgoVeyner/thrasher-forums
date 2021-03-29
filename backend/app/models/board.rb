class Board < ApplicationRecord
  has_many :posts
  
  validates :name, uniqueness: true

  def slug 
    self.name.gsub(" ", "-")
  end

  def self.find_by_slug(slug)
    self.all.find {|game| game.slug == slug}
  end

end
