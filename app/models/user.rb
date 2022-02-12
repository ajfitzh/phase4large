class User < ApplicationRecord
    has_many :posts
    has_many :tags, through: :blogs
    has_many :comments, through: :blogs
  
    has_secure_password
  
    validates :username, presence: true, uniqueness: true
end