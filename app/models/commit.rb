# frozen_string_literal: true

# == Schema Information
#
# Table name: commits
#
#  id                 :integer          not null, primary key
#  release_created_at :datetime         not null
#  slug               :string           not null
#  page_speed         :jsonb            not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Commit < ApplicationRecord
  validates :slug,                uniqueness: true
  validates :slug,                presence: true
  validates :release_created_at,  presence: true

  Data = Struct.new(:commit_id, :value)
  Chart = Struct.new(:name, :divider, :unit, :chartType, :limit, :data)

  scope :best, -> { pluck("page_speed -> 'ruleGroups' -> 'SPEED' -> 'score'").max }

  class << self
    COMMIT_ATTRIBUTES = {
      scores: {
        path: "page_speed -> 'ruleGroups' -> 'SPEED' -> 'score'",
        name: 'Page Speed Score',
        divider: 1,
        unit: '',
        chartType: 'bar_chart'
      },
      js_weights: {
        path: "page_speed -> 'pageStats' -> 'javascriptResponseBytes'",
        name: 'Javascript Total Weight',
        divider: 1024,
        unit: 'kb',
        chartType: 'area_chart',
        limit: 500
      },
      css_weights: {
        path: "page_speed -> 'pageStats' -> 'cssResponseBytes'",
        name: 'CSS Total Weight',
        divider: 1024,
        unit: 'kb',
        chartType: 'area_chart',
        limit: 150
      },
      html_weights: {
        path: "page_speed -> 'pageStats' -> 'htmlResponseBytes'",
        name: 'HTML Total Weight',
        divider: 1024,
        unit: 'kb',
        chartType: 'area_chart',
        limit: 10
      },
      image_weights: {
        path: "page_speed -> 'pageStats' -> 'imageResponseBytes'",
        name: 'Image Total Weight',
        divider: 1024,
        unit: 'kb',
        chartType: 'area_chart',
        limit: 20
      }
    }.freeze

    COMMIT_ATTRIBUTES.each_key do |method_name|
      define_method method_name do
        get_values(method_name)
      end
    end

    def attributes
      COMMIT_ATTRIBUTES.keys
    end

    def charts
      charts = []
      attributes.each do |attribute|
        chart = chart_to_hash(attribute)
        charts << Chart.new(*chart.values_at(*Chart.members))
      end
      charts
    end

    private

    def chart_to_hash(attribute)
      COMMIT_ATTRIBUTES[attribute].except(:path).merge(data: get_values(attribute))
    end

    def get_values(attr)
      order(created_at: :asc).pluck('slug', COMMIT_ATTRIBUTES[attr][:path])
                             .map { |data| Data.new(*data) }
    end
  end
end
