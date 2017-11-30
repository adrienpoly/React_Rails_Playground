# frozen_string_literal: true

class CommitsController < ApplicationController
  # respond_to :json

  def index
    @commits = Commit.all.order(created_at: params[:order] || :desc)
    render json: @commits
  end
end
