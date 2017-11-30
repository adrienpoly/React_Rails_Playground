# frozen_string_literal: true

class CommitsController < ApplicationController
  # respond_to :json

  def index
    @commits = Commit.all.order(release_created_at: :desc)
    render json: @commits
  end
end
