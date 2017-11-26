# frozen_string_literal: true

GetPageSpeedJob.set(wait: 3.minute).perform_later
