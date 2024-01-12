
class ConversationCreateRequest {
    constructor(name,avatarUrl,adminIds,participantIds,isGroup,file) {
        this.name = name;
        this.avatarUrl = avatarUrl;
        this.adminIds = adminIds;
        this.participantIds = participantIds;
        this.isGroup = isGroup;
        this.file = file;
    }
}

class ConversationCreateRequestFriend {
    constructor(name,avatarUrl) {
        this.name = name;
        this.avatarUrl = avatarUrl;
    }
}

class CreateCommentRequest {
    constructor(PostId, ParentId, UserId, Content, Files) {
        this.PostId = PostId;
        this.ParentId = ParentId;
        this.UserId = UserId;
        this.Content = Content;
        this.Files = Files;
    }
}

class OwnerRepresentation {
    constructor(UserId, name, avatarUrl) {
        this.UserId = UserId;
        this.name = name;
        this.avatarUrl = avatarUrl;
    }
}

class CreatePostRequest {
    constructor(title, content, files, owner,sharedId) {
        this.title = title;
        this.content = content;
        this.files = files;
        this.owner = owner;
        this.sharedId = sharedId;
    }
}

class LoginRequest {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class MessageCreateRequest {
    constructor(conversationId,senderId, content,replyToId, files ) {
        this.conversationId = conversationId;
        this.senderId = senderId;
        this.content = content;
        this.replyToId = replyToId;
        this.files = files;
    }
}

class UpdateCommentRequest{
    constructor(id,content,files){
        this.id = id;
        this.content = content;
        this.files = files;
    }
}



class UpdateLikeRequest{
    constructor(id,userId){
        this.id = id;
        this.userId = userId;
    }
}

class LikeRepresentation{
    constructor(id,userId){
        this.id = id;
        this.userId = userId;
    }
}

class UpdateMessageRequest{
    constructor(id,content,files){
        this.id = id;
        this.content = content;
        this.files = files;
    }
}

class UpdatePostRequest{
    constructor(id,title,content,files){
        this.id = id;
        this.title = title;
        this.content = content;
        this.files = files;
    }
}

class UpdateUserPersonalInformationRequest{
    constructor(name,prevAvatarUrl,avatarFile,dateOfBirth,favorites,biography){
        this.name = name;
        this.prevAvatarUrl = prevAvatarUrl;
        this.avatarFile = avatarFile;
        this.dateOfBirth = dateOfBirth;
        this.favorites = favorites;
        this.biography = biography;
    }
}

class UserRegisterRequest{
    constructor(username,password,email,name,dateOfBirth){
        this.username = username;
        this.password = password;
        this.email = email;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
    }
}

export {
    ConversationCreateRequest,
    ConversationCreateRequestFriend,
    CreateCommentRequest,
    CreatePostRequest,
    LoginRequest,
    MessageCreateRequest,
    OwnerRepresentation,
    UpdateCommentRequest,
    UpdateLikeRequest,
    UpdateMessageRequest,
    UpdatePostRequest,
    UpdateUserPersonalInformationRequest,
    UserRegisterRequest,
    LikeRepresentation
}