class VideosController < ApplicationController
  def index
    videos = Video.all
    render json: videos
  end

  def show
    video = Video.find_by(id: params[:id])
    render json: video
  end
end
