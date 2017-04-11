class AddLikesToVideos < ActiveRecord::Migration[5.0]
  def change
    add_column :videos, :likes, :integer
  end
end
