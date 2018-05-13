class Card < ApplicationRecord
  acts_as_taggable_on :tags
  belongs_to :topic

  scope :visible, -> { where visible: true }
end
