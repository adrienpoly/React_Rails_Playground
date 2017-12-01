# frozen_string_literal: true

# for each new commit log the page speed results in the DB for performances stats
# you must run first heroku labs:enable runtime-dyno-metadata to get ENV metadata

class WakeUpDyno < ApplicationJob
  queue_as :default
  TEST_URL = 'https://react-rails-playground.herokuapp.com'
  ROOT_URL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed'

  def perform
    HTTP.get(ROOT_URL, params: { url: TEST_URL, key: ENV['google_api_key'] })
  end
end
