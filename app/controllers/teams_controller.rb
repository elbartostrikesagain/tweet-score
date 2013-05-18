class TeamsController < ApplicationController
  def index
    if current_user && params[:q]
      teams = current_user.teams.where("name LIKE ?", "#{params[:q]}%").pluck(:name)
    else
      teams = []
    end
    render json: teams, callback: params[:callback]
  end
end