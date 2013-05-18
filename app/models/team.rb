class Team < ActiveRecord::Base
  belongs_to :user

  def self.save_from_params(team_names)
    team_names.each do |team_name|
      Team.find_or_create_by_user_and_name(current_user, team_name)
    end
  end

end