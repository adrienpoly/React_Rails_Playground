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
  
  scope     :best, -> { pluck("page_speed -> 'ruleGroups' -> 'SPEED' -> 'score'").max }

  def self.scores
    order(created_at: :asc).pluck("slug", "page_speed -> 'ruleGroups' -> 'SPEED' -> 'score'")
      .map { |data| Score.new(data[0], data[1]) }
    #code
  end
end
