class Board < ApplicationRecord
  def slug 
    self.name.gsub(" ", "-")
  end

  def self.find_by_slug(slug)
    self.all.find {|game| game.slug == slug}
  end

  validates :name, uniqueness: true
end
