# frozen_string_literal: true

GetPageSpeedJob.set(wait: 3.minutes).perform_later
