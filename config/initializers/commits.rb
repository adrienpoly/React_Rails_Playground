# for each new commit log the page speed results in the DB for performances stats
# you must run first heroku labs:enable runtime-dyno-metadata to get ENV metadata

TEST_URL = 'https://react-rails-playground.herokuapp.com'
ROOT_URL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed'
module TrackPageSpeed
  class Application < Rails::Application
    config.after_initialize do
      # initialization code goes here
      def new_commit?
        return true if Commit.all.blank?
        if Rails.env.production?
          Commit.last.slug != ENV["HEROKU_SLUG_COMMIT"]
        else
          Commit.last.release_created_at != `git log -1 --format=%cd`
        end
      end

      def add_commit
        page_speed = HTTP.get(ROOT_URL, params: { url: TEST_URL, key: ENV["google_api_key"] })

        release_created_at = ENV["HEROKU_RELEASE_CREATED_AT"] || `git log -1 --format=%cd`.strip
        slug = ENV["HEROKU_SLUG_COMMIT"] || `git rev-parse HEAD`.strip

        return if page_speed.code != 200
        commit = Commit.create(
          release_created_at: release_created_at,
          slug: slug,
          page_speed: JSON.parse(page_speed.body.to_s) || {}
        )
      end

      add_commit if new_commit?
    end
  end
end
