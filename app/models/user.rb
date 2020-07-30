class User < ApplicationRecord
    attr_reader :password

    validates :email, presence: true, uniqueness: true
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :first_name, presence: true
    validates :last_name, presence: true

    after_initialize :ensure_session_token

    has_many :campaigns,
        foreign_key: :creator_id,
        class_name: :Campaign

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        
        self.password_digest = BCrypt::Password.create(password)
    end


    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.base64(64)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64(64)
        self.save
        self.session_token
    end
end
