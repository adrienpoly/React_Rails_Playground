# frozen_string_literal: true

class PagesController < ApplicationController
  def home
    @scores = Commit.scores
    @latest = @scores.last.value
    @best   = Commit.best
  end
end
