# frozen_string_literal: true

WakeUpDyno.set(wait: 120.seconds).perform_later
GetPageSpeedJob.set(wait: 180.seconds).perform_later
