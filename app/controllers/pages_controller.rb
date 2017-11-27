# frozen_string_literal: true

class PagesController < ApplicationController
  def home
    @scores = Commit.scores
    @score = @scores.last
  end
end
