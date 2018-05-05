class Card < ApplicationRecord
  acts_as_taggable_on :tags

  scope :visible, -> { where visible: true }
end
