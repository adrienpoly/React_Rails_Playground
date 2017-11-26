# frozen_string_literal: true

GetPageSpeedJob.set(wait: 2.minute).perform_later
