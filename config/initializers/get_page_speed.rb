# frozen_string_literal: true

WakeUpDyno.set(wait: 90.seconde).perform_later
GetPageSpeedJob.set(wait: 120.seconde).perform_later
