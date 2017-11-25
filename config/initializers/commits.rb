# for each new commit log the page speed results in the DB for performances stats

TEST_URL = 'https://react-rails-playground.herokuapp.com'
ROOT_URL = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?'

def new_commit?
  return true if Commit.all.blank?
  if Rails.env.production?
    Commit.last.release_version != ENV["HEROKU_RELEASE_VERSION"]
  else
    Commit.last.release_created_at != `git log -1 --format=%cd`
  end
end

def add_commit
  page_speed = RestClient.get("#{ROOT_URL}url=#{TEST_URL}&key=#{ENV["google_api_key"]}", headers = {})
  release_created_at = ENV["HEROKU_RELEASE_CREATED_AT"] || `git log -1 --format=%cd`.strip
  slug = ENV["HEROKU_SLUG_COMMIT"] || `git rev-parse HEAD`.strip
  commit = Commit.create!(
    release_created_at: release_created_at,
    slug: slug,
    page_speed: JSON.parse(page_speed.body) || {}
  )
end

# add_commit if new_commit?
