class User < ApplicationRecord
  has_many :posts
  has_many :comments

  has_secure_password

  validates_uniqueness_of :username;
  validates_uniqueness_of :email;
end
