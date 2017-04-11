class AddDefaultValueToVideosLikes < ActiveRecord::Migration[5.0]
  def change
    change_column_default :videos, :likes, 0
  end
end
