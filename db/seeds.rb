
# frozen_string_literal: true

COMMITS_URL = 'https://react-rails-playground.herokuapp.com/commits'

def clear_commits
  p 'clear commits in db'
  Commit.destroy_all
end

def fetch_commits
  p 'Fetching data from demo app'
  commits = HTTP.get(COMMITS_URL)
  JSON.parse(commits.body.to_s)
end

def create_commits
  commits = fetch_commits
  commits.each do |commit|
    Commit.create!(commit)
    p "Commit #{commit['slug'].first(7)} created"
  end
end

clear_commits
create_commits
