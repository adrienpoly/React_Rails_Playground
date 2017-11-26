# frozen_string_literal: true

class CreateCommits < ActiveRecord::Migration[5.1]
  def change
    create_table :commits do |t|
      t.datetime  :release_created_at, null: false
      t.string    :slug, null: false
      t.jsonb     :page_speed, null: false

      t.timestamps
    end
  end
end
