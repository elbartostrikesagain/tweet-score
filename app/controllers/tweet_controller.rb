class TweetController < ApplicationController
  def create
    #hash_tags: ["#test", "#test2"]
    #teams: ["colorado" => 3, "ohio" => "2"]
    HashTag.save_from_params(params[:hash_tags])
    Team.save_from_params(params[:teams].keys)

    tweet = construct_tweet(params)
    if tweet.length > 256
      flash[:error] = "Tweet is too long"
    elsif current_user.tweet(tweet)
      flash[:success] = "Score posted"
    else
      flash[:error] = "Unable submit tweet, please check your conncetion"
    end 
  end

  private

  def construct_tweet(params)
    tweet = ""
    params[:teams].each do |team_name, score|
      tweet += "#{team_name} #{score}"
    end

    params[:hash_tags].each do |hash_tag|
      hash_tag = "#" + hash_tag unless hash_tag.first == "#"
      tweet += "#{hash_tag}"
    end
    return tweet
  end

end