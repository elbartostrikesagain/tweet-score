class HashTag < ActiveRecord::Base
  belongs_to :user

  def self.save_from_params(hash_tags)
    hash_tags.each do |hash_tag|
      Hash.find_or_create_by_user_and_content(current_user, hash_tag)
    end
  end
  
end