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
    # Commit.attributes.each do |attribute|
    #   @values[attribute] = { values: Commit.send(attribute) }
    # end
  end
end
