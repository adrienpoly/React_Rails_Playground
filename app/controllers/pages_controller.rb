# frozen_string_literal: true

class PagesController < ApplicationController
  include HighVoltage::StaticPage

  def home
    @scores = Commit.scores
    @latest = @scores.last.value
    @best   = Commit.best
  end

  def page_speed
    @charts = Commit.charts
  end
end
