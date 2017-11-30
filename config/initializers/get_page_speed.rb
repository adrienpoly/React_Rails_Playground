# frozen_string_literal: true

WakeUpDyno.set(wait: 120.second).perform_later
GetPageSpeedJob.set(wait: 180.second).perform_later
