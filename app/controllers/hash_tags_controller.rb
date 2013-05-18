class HashTagsController < ApplicationController
  def index
    if current_user && params[:q]
      teams = current_user.hash_tags.where("content LIKE ?", "#{params[:q]}%").pluck(:content)
    else
      teams = []
    end
    render json: teams, callback: params[:callback]
  end
end