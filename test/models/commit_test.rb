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

require 'test_helper'

class CommitTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
