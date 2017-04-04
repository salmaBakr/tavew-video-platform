class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :file_content_type, :file_file_name, :file_file_size, :created_at, :description
  belongs_to :user
end


