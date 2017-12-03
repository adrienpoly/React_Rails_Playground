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

  Score = Struct.new(:commit_id, :value)
  Chart = Struct.new(:name, :divider, :unit, :chart_type, :values)

  scope :best, -> { pluck("page_speed -> 'ruleGroups' -> 'SPEED' -> 'score'").max }

  class << self
    COMMIT_ATTRIBUTES = {
      scores: {
        path: "page_speed -> 'ruleGroups' -> 'SPEED' -> 'score'",
        name: 'Page Speed Score',
        divider: 1,
        unit: '',
        chart_type: 'Bar'
      },
      js_weights: {
        path: "page_speed -> 'pageStats' -> 'javascriptResponseBytes'",
        name: 'Javascript total weight',
        divider: 1024,
        unit: 'kb',
        chart_type: 'LineChart'
      },
      css_weights: {
        path: "page_speed -> 'pageStats' -> 'cssResponseBytes'",
        name: 'CSS total weight',
        divider: 1024,
        unit: 'kb',
        chart_type: 'LineChart'
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
      COMMIT_ATTRIBUTES[attribute].except(:path).merge(values: get_values(attribute))
    end

    def get_values(attr)
      order(created_at: :asc).pluck('slug', COMMIT_ATTRIBUTES[attr][:path])
                             .map { |data| Score.new(*data) }
    end
  end
end
